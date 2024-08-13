import { track } from '@amplitude/analytics-browser';
import { nanoid } from 'nanoid';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import 'firebase/compat/storage';
import { STATE_CHANGED, storage } from '@constants/firebase.ts';
import { VALIDATION_CHECK } from '@constants/validationCheck';

import IconPlusButton from './icons/IconPlusButton';
import { container, errorText, fileInput, fileLabelVar, fileNameVar, textWrapper } from './style.css';

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
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploadPercent, setUploadPercent] = useState(-1);
  const [fileName, setFileName] = useState('');

  const isFileUploading = uploadPercent < 100 && uploadPercent >= 0;
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

  const handleFileUpload = (file: File, id: number) => {
    const storageRef = storage.ref();
    const uploadTask = storageRef.child(`recruiting/applicants/question/${file.name}${nanoid(7)}`).put(file);

    track(`click-apply-add_file${id}`);

    uploadTask.on(
      STATE_CHANGED,
      (snapshot) => {
        const progress = Math.trunc((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setUploadPercent(progress);
      },
      (error) => {
        console.error(error);
        setError(`file${id}`, { type: 'unknownError', message: VALIDATION_CHECK.fileInput.errorTextUnknownError });
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          const urlWithoutToken = url.split('&token=')[0];

          setFileName(file.name);
          setValue(`file${id}`, {
            recruitingQuestionId: id,
            file: urlWithoutToken,
            fileName: file.name,
          });
          fileAnswer === '' && setValue(`${section}${id}`, '파일 제출');
          setValue(`file${id}Deleted`, false);
          setUploadPercent(-1);
          track(`done-apply-add_file${id}`);
        });
      },
    );
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
        file: defaultFileUrl,
        fileName: defaultFileName,
        recruitingQuestionId: defaultFileId,
      });
    }

    if (fileValue && fileAnswer === '') setValue(`${section}${id}`, '파일 제출');
  }, [section, id, defaultFileId, defaultFileUrl, defaultFileName, fileValue, fileAnswer, isFileDeleted, setValue]);

  return (
    <div className={container}>
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
      <label
        htmlFor={`file-${id}`}
        className={`amp-mask ${fileLabelVar[errors[`file${id}`] ? 'error' : fileName === '' ? 'default' : 'selected']}`}>
        <div className={textWrapper}>
          <span>파일</span>
          <span className={fileNameVar[getFileNameClass()]}>{getDisplayText()}</span>
        </div>
        <IconPlusButton
          isSelected={fileName !== 'delete-file' && fileValue}
          onClickIcon={handleClickIcon}
          disabled={disabledStatus}
        />
      </label>
      {errors[`file${id}`] && <p className={errorText}>{errors[`file${id}`]?.message as string}</p>}
    </div>
  );
};
export default FileInput;
