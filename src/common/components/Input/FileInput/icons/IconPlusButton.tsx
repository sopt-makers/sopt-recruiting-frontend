import { RefObject } from 'react';

import { fileIcon, fileIconSvgVar, iconPath } from '../style.css';

const IconPlusButton = ({
  isSelected,
  inputRef,
  file,
  setFile,
  disabled,
}: {
  isSelected: boolean;
  inputRef: RefObject<HTMLInputElement>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  disabled?: boolean;
}) => {
  const handleClickDelete = () => {
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
    <button type="button" className={fileIcon} onClick={handleClickDelete} disabled={disabled}>
      <div className={fileIconSvgVar[isSelected ? 'selected' : 'default']}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2 7.5H13" stroke="#F7F7F7" strokeOpacity="0.968627" strokeLinecap="round" className={iconPath} />
          <path
            d="M7.5 13L7.5 2"
            stroke="#F7F7F7"
            strokeOpacity="0.968627"
            strokeLinecap="round"
            className={iconPath}
          />
        </svg>
      </div>
    </button>
  );
};

export default IconPlusButton;
