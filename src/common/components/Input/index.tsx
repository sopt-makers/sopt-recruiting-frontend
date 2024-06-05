import { container, circle, input, description, title, inputLine } from './style.css';
import { TextBoxProps } from './types';

const TextBox = ({
  label,
  placeholderText,
  descriptionText,
  descriptionButton,
  isRequired,
  isFixed,
  errorText,
  button,
  secondary,
  register,
  ...inputElementProps
}: TextBoxProps) => {
  // 조건부 렌더링 / 유효성 검증은 추후 구현
  return (
    <div className={container}>
      {!secondary && (
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {isRequired && <i className={circle} />}
        </label>
      )}
      <div className={inputLine}>
        <input
          id={label}
          className={input}
          placeholder={placeholderText}
          disabled={isFixed}
          {...inputElementProps}
          {...() => register && { ...register(label) }}
        />
        {button}
      </div>
      {descriptionText && (
        <div className={description}>
          <p>{descriptionText}</p>
          {descriptionButton}
        </div>
      )}
    </div>
  );
};

export default TextBox;
