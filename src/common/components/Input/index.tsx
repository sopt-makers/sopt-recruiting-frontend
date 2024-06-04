import { container, circle, input, label, description } from './style.css';

const DescriptionButton = ({ children }: { children: string }) => {
  return (
    <button type="button" style={{ cursor: 'pointer' }}>
      {children}
    </button>
  );
};

const Input = () => {
  return (
    <div className={container}>
      <label className={label}>
        <span>타이틀</span>
        <i className={circle} />
      </label>
      <input className={input} placeholder="디폴트" />
      <div className={description}>
        <p>비밀번호를 잃어버리셨나요?</p>
        <DescriptionButton>비밀번호 재설정하기</DescriptionButton>
      </div>
    </div>
  );
};

export default Input;
