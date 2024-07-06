import { container, label, link } from './style.css';

const LINK = 'https://sopt.org';

const LinkInput = () => {
  return (
    <div className={container}>
      <span className={label}>링크</span>
      <a className={link} href={LINK} target="_blank" rel="noreferrer">
        {LINK}
      </a>
    </div>
  );
};

export default LinkInput;
