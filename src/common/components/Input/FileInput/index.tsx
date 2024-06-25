import { useRef, useState } from 'react';

import IconPlusButton from './icons/IconPlusButton';
import { container, fileInput, fileLabelVar, fileNameVar, fileText, textWrapper } from './style.css';

const FileInput = ({ disabled }: { disabled?: boolean }) => {
  const [file, setFile] = useState<File | null>(null);
  const fileName = file ? file.name : '';
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
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
      <label htmlFor="portfolio" className={fileLabelVar[fileName === '' ? 'default' : 'selected']}>
        <div className={textWrapper}>
          <span className={fileText}>포트폴리오</span>
          <span className={fileNameVar[fileName === '' ? 'default' : 'selected']}>
            {fileName === '' ? '50mb 이하 | pdf, pptx' : fileName}
          </span>
        </div>
        <IconPlusButton
          isSelected={fileName !== ''}
          inputRef={inputRef}
          file={file}
          setFile={setFile}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

export default FileInput;
