import { container, circle, input, label, description } from './style.css';

export interface InputProps {
  title: string;
  placeholderText: string;

  size?: 'sm' | 'md' | 'lg';
  isRequired?: boolean;
  isFixed?: boolean;
  descriptionText?: string;
  errorText?: string;
  inputType?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url';
  maxLength?: number;
  pattern?: string;
  descriptionButtonText?: string;
  descriptionButtonOnClick?: () => void;
}
const Input = (props: InputProps) => {
  const {
    title,
    placeholderText,
    size = 'sm',
    isRequired,
    isFixed,
    descriptionText,
    errorText,
    inputType,
    maxLength,
    pattern,
    descriptionButtonText,
    descriptionButtonOnClick,
  } = props;

  return (
    <div className={container}>
      <label className={label}>
        <span>{title}</span>
        {isRequired && <i className={circle} />}
      </label>
      <input className={input} placeholder={placeholderText} type={inputType} maxLength={maxLength} pattern={pattern} />
      <div className={description}>
        {descriptionText && <p>{descriptionText}</p>}
        {descriptionButtonText && (
          <button type="button" style={{ cursor: 'pointer' }} onClick={descriptionButtonOnClick}>
            {descriptionButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
