import { container, label, link } from './style.css';

const LinkInput = () => {
  return (
    <label htmlFor="link-input" className={container}>
      <span className={label}>링크</span>
      <input id="link-input" className={link} type="url" placeholder="https://www.sopt.org/recruit" />
    </label>
  );
};

export default LinkInput;
