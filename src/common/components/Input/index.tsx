import { container, circle, input, description, title } from './style.css';
import { TextBoxProps } from './types';

const TextBox = ({
  label,
  placeholderText,
  descriptionText,
  isRequired,
  isFixed,
  errorText,
  buttonText,
  buttonHandler,
  ...inputElementProps
}: TextBoxProps) => {
  // 조건부 렌더링 / 유효성 검증은 추후 구현
  return (
    <div className={container}>
      {label && (
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {isRequired && <i className={circle} />}
        </label>
      )}
      <input id={label} className={input} placeholder={placeholderText} disabled={isFixed} {...inputElementProps} />
      {descriptionText && (
        <div className={description}>
          <p>{descriptionText}</p>
          {buttonText && (
            <button type="button" style={{ cursor: 'pointer' }} onClick={buttonHandler}>
              {buttonText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TextBox;
