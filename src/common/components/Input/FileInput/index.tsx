import IconPlusButton from './icons/IconPlusButton';
import { container, fileInput, fileLabel, fileText, textWrapper } from './style.css';

const FileInput = () => {
  return (
    <div className={container}>
      <input id="file" type="file" className={fileInput} />
      <label htmlFor="file" className={fileLabel}>
        <div className={textWrapper}>
          <span className={fileText}>포트폴리오</span>
          <span className={fileText}>50mb 이하 | pdf, pptx</span>
        </div>
        <IconPlusButton />
      </label>
    </div>
  );
};

export default FileInput;
