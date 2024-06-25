import { useRef, useState } from 'react';

import IconPlusButton from './icons/IconPlusButton';
import { container, errorText, fileInput, fileLabelVar, fileNameVar, textWrapper } from './style.css';

const FileInput = ({ disabled }: { disabled?: boolean }) => {
  const [isError, setIsError] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileName = file ? file.name : '';
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const LIMIT_SIZE = 1024 ** 2 * 50; //50MB
    if (file) {
      if (LIMIT_SIZE < file.size) {
        setIsError(true);
        if (inputRef.current) {
          inputRef.current.value = '';
          setFile(null);
        }
      } else {
        setIsError(false);
        setFile(file);
      }
    }
  };

  const handleClickIcon = () => {
    if (inputRef.current) {
      if (file) {
        inputRef.current.value = '';
        setFile(null);
      } else {
        inputRef.current.click();
      }
    }
  };

  return (
    <div className={container}>
      <input
        id="portfolio"
        type="file"
        accept=".pdf, .pptx"
        onChange={handleChangeFile}
        ref={inputRef}
        className={fileInput}
        disabled={disabled}
      />
      <label htmlFor="portfolio" className={fileLabelVar[isError ? 'error' : fileName === '' ? 'default' : 'selected']}>
        <div className={textWrapper}>
          <span>포트폴리오</span>
          <span className={fileNameVar[fileName === '' ? 'default' : 'selected']}>
            {fileName === '' ? '50mb 이하 | pdf, pptx' : fileName}
          </span>
        </div>
        <IconPlusButton isSelected={fileName !== ''} onClickIcon={handleClickIcon} disabled={disabled} />
      </label>
      {isError && <p className={errorText}>첨부파일 용량을 초과했어요</p>}
    </div>
  );
};

export default FileInput;
