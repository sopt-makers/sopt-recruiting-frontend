import { fileIcon } from '../style.css';

const IconPlusButton = () => {
  return (
    <div className={fileIcon}>
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M2 7.5H13" stroke="#F7F7F7" strokeOpacity="0.968627" strokeLinecap="round" />
        <path d="M7.5 13L7.5 2" stroke="#F7F7F7" strokeOpacity="0.968627" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default IconPlusButton;
