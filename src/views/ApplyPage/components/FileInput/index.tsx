import { track } from '@amplitude/analytics-browser';
import { nanoid } from 'nanoid';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import 'firebase/compat/storage';
import { STATE_CHANGED, storage } from '@constants/firebase.ts';

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
const ACCEPTED_FORMATS = '.pdf, .pptx';

const FileInput = ({ section, id, isReview, disabled, defaultFile }: FileInputProps) => {
  const [isError, setIsError] = useState(false);
  const [uploadPercent, setUploadPercent] = useState(-1);
  const [file, setFile] = useState<File | null>(null);

  const fileName = file ? file.name : '';
  const inputRef = useRef<HTMLInputElement>(null);

  const { register, setValue, clearErrors, getValues } = useFormContext();
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
        throw error;
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          const urlWithoutToken = url.split('&token=')[0];
          setFile(file);
          setValue(`file${id}`, {
            recruitingQuestionId: id,
            file: urlWithoutToken,
            fileName: file.name,
          });
          getValues(`${section}${id}`) === '' && setValue(`${section}${id}`, '파일 제출');
          clearErrors(`${section}${id}`);
          track(`done-apply-add_file${id}`);
        });
      },
    );
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (LIMIT_SIZE < file.size) {
        setIsError(true);
        if (inputRef.current) {
          inputRef.current.value = '';
        }
        setFile(null);
      } else {
        setIsError(false);
        setFile(null);
        handleFileUpload(file, id);
      }
    }
  };

  const handleClickIcon = () => {
    if (inputRef.current) {
      if (file || getValues(`file${id}`)) {
        inputRef.current.value = '';
        setFile(null);
        setValue(`file${id}`, undefined);
        setUploadPercent(-1);
        getValues(`${section}${id}`) === '파일 제출' && setValue(`${section}${id}`, '');
        track(`click-apply-remove_file${id}`);
      } else if (uploadPercent !== -2 && defaultFileName) {
        setUploadPercent(-2);
        setValue(`file${id}`, undefined);
        getValues(`${section}${id}`) === '파일 제출' && setValue(`${section}${id}`, '');
        track(`click-apply-remove_file${id}`);
      } else {
        inputRef.current.click();
      }
    }
  };

  useEffect(() => {
    if (defaultFileId && defaultFileUrl && defaultFileName) {
      setValue(`file${defaultFileId}`, {
        file: defaultFileUrl,
        fileName: defaultFileName,
        recruitingQuestionId: defaultFileId,
      });
    }
  }, [defaultFileId, defaultFileUrl, defaultFileName, setValue]);
  console.log(fileName);
  console.log(getValues(`file${id}`));
  console.log(uploadPercent);

  return (
    <div className={container}>
      <input
        id={`file-${id}`}
        type="file"
        accept={ACCEPTED_FORMATS}
        {...register(`file${id}`)}
        onChange={(e) => handleFileChange(e, id)}
        ref={inputRef}
        className={`amp-unmask ${fileInput}`}
        disabled={
          disabled ||
          isReview ||
          (uploadPercent >= 0 && uploadPercent < 100) ||
          (uploadPercent === 100 && fileName === '')
        }
      />
      <label
        htmlFor={`file-${id}`}
        className={fileLabelVar[isError ? 'error' : fileName === '' ? 'default' : 'selected']}>
        <div className={textWrapper}>
          <span>파일</span>
          {getValues(`file${id}`) ? (
            <span className={fileNameVar['selected']}>{getValues(`file${id}`)?.fileName}</span>
          ) : (
            <>
              {(uploadPercent !== -1 || !defaultFileName) && (
                <span className={fileNameVar[fileName === '' ? 'default' : 'selected']}>
                  {uploadPercent < 0 && fileName === ''
                    ? '50mb 이하 | pdf, pptx'
                    : uploadPercent < 100
                      ? `업로드 중... ${uploadPercent}/100% 완료`
                      : uploadPercent === 100 && fileName === ''
                        ? '파일을 전송하고 있어요... 잠시만 기다려주세요...'
                        : fileName}
                </span>
              )}
              {uploadPercent === -1 && (defaultFileName || getValues(`file${id}`)) && (
                <span className={fileNameVar['selected']}>{defaultFileName}</span>
              )}
            </>
          )}
        </div>
        <IconPlusButton
          isSelected={getValues()[`file${id}`]}
          onClickIcon={handleClickIcon}
          disabled={disabled || isReview}
        />
      </label>
      {isError && <p className={errorText}>첨부파일 용량을 초과했어요</p>}
    </div>
  );
};

export default FileInput;
