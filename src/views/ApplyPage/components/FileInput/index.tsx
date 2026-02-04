import { track } from '@amplitude/analytics-browser';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';
import { getPresignedUrl, uploadToS3, verifyFileUpload } from '@apis/fileUpload';
import IconPlusButton from './icons/IconPlusButton';
import {
  containerVar,
  errorTextVar,
  fileInput,
  fileLabelSizeVar,
  fileLabelVar,
  fileNameSizeVar,
  fileNameVar,
  textWrapperVar,
} from './style.css';

interface FileInputProps {
  section: string;
  id: number;
  isReview: boolean;
  disabled?: boolean;
  defaultFile?: { id: number; file?: string; fileName?: string };
}

const LIMIT_SIZE = 1024 ** 2 * 50; // 50MB
const ACCEPTED_FORMATS = '.pdf';

const FileInput = ({ section, id, isReview, disabled, defaultFile }: FileInputProps) => {
  const { deviceType } = useDeviceType();
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadPercent, setUploadPercent] = useState(-1);
  const [fileName, setFileName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const isFileUploading = isUploading;
  const isFileSending = uploadPercent === 100;
  const disabledStatus = disabled || isReview || isFileUploading || isFileSending;

  const {
    register,
    setValue,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useFormContext();
  
  const fileAnswer = getValues(`${section}${id}`);
  const isFileDeleted = getValues(`file${id}Deleted`);
  const fileValue = getValues(`file${id}`);
  const { id: defaultFileId, file: defaultFileUrl, fileName: defaultFileName } = defaultFile || {};

  const handleFileUpload = async (file: File, id: number) => {
    setIsUploading(true);
    setUploadPercent(0);
    setUploadError(null);
    try {
      // 1. PresignedUrl 발급
      const presignedUrl = await getPresignedUrl(file.name);
      setUploadPercent(10);
      // 2. S3 업로드
      await uploadToS3(presignedUrl, file);
      setUploadPercent(80);
      // 3. PresignedUrl 업로드 검증 → s3Key 획득
      const s3Key = await verifyFileUpload();
      setUploadPercent(100);
      // 4. RHF에 값 저장
      setFileName(file.name);
      setValue(`file${id}`, {
        recruitingQuestionId: id,
        fileKey: s3Key,
        fileName: file.name,
      });
      if (fileAnswer === '') setValue(`${section}${id}`, '파일 제출');
      setValue(`file${id}Deleted`, false);
      setTimeout(() => setUploadPercent(-1), 500); // UX: 잠깐 100% 표시 후 초기화
    } catch (e: any) {
      setUploadError(e.message || '알 수 없는 오류');
      setUploadPercent(-1);
      setFileName('');
      handleDeleteFileValue();
      setError(`file${id}`, { type: 'unknownError', message: VALIDATION_CHECK.fileInput.errorTextUnknownError });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDeleteFileValue = () => {
    setValue(`file${id}`, undefined);
    setValue(`file${id}Deleted`, true);
    fileAnswer === '파일 제출' && setValue(`${section}${id}`, '');
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (LIMIT_SIZE < file.size) {
        setError(`file${id}`, { type: 'maxLength', message: VALIDATION_CHECK.fileInput.errorText });
        setUploadPercent(-1);
        setFileName('delete-file');
        handleDeleteFileValue();
        if (inputRef.current) {
          inputRef.current.value = '';
        }
      } else {
        clearErrors(`file${id}`);
        handleFileUpload(file, id);
      }
    }
  };

  const handleClickIcon = () => {
    if (inputRef.current) {
      if (fileName !== 'delete-file' && (fileName || defaultFileName)) {
        inputRef.current.value = '';
        setFileName('delete-file');
        handleDeleteFileValue();
        setUploadPercent(-1);
        track(`click-apply-remove_file${id}`);
      } else {
        inputRef.current.click();
      }
    }
  };

  const getFileNameClass = () => {
    return (!defaultFileName && fileName === '') || (defaultFileName && isFileDeleted) || fileName === 'delete-file'
      ? 'default'
      : 'selected';
  };

  const getDisplayText = () => {
    if (uploadPercent === -1 && fileName === '' && defaultFileName && !isFileDeleted) return defaultFileName;
    else if (uploadPercent === -1 && (fileName === '' || fileName === 'delete-file')) return '50mb 이하 | pdf';
    else if (isFileUploading) return `업로드 중... ${uploadPercent}/100% 완료`;
    else if (isFileSending) return '파일을 전송하고 있어요... 잠시만 기다려주세요...';
    else return fileName;
  };

  useEffect(() => {
    if (isFileDeleted) return;

    if (fileValue) {
      setFileName(fileValue.fileName);
      return;
    }

    if (defaultFileId && defaultFileUrl && defaultFileName) {
      setValue(`file${defaultFileId}`, {
        fileKey: defaultFileUrl,
        fileName: defaultFileName,
        recruitingQuestionId: defaultFileId,
      });
    }

    if (fileValue && fileAnswer === '') setValue(`${section}${id}`, '파일 제출');
  }, [section, id, defaultFileId, defaultFileUrl, defaultFileName, fileValue, fileAnswer, isFileDeleted, setValue]);

  return (
    <div className={containerVar[deviceType]}>
      <AmplitudeEventTrack eventName={`click-apply-add_file${id}`}>
        <input
          id={`file-${id}`}
          type="file"
          accept={ACCEPTED_FORMATS}
          {...register(`file${id}`)}
          onChange={(e) => handleFileChange(e, id)}
          ref={inputRef}
          className={fileInput}
          disabled={disabledStatus}
        />
      </AmplitudeEventTrack>
      <label
        htmlFor={`file-${id}`}
        className={`${fileLabelVar[errors[`file${id}`] ? 'error' : fileName === '' ? 'default' : 'selected']} ${fileLabelSizeVar[deviceType]}`}
      >
        <div className={textWrapperVar[deviceType]}>
          <span>참고 자료</span>
          <span className={`${fileNameVar[getFileNameClass()]} ${fileNameSizeVar[deviceType]}`}>
            {getDisplayText()}
          </span>
        </div>
        <IconPlusButton
          isSelected={fileName !== 'delete-file' && fileValue}
          onClickIcon={handleClickIcon}
          disabled={disabledStatus}
        />
      </label>
      {uploadError && <p className={errorTextVar[deviceType]}>{uploadError}</p>}
      {errors[`file${id}`] && <p className={errorTextVar[deviceType]}>{errors[`file${id}`]?.message as string}</p>}
    </div>
  );
};
export default FileInput;
