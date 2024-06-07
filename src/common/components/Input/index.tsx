import { circle, input, description, title, inputLine, errorInput, containerVar, errorDescription } from './style.css';
import { TextBoxProps } from './types';

const TextBox = ({
  label,
  placeholderText,
  size = 'sm',
  descriptionText,
  descriptionButton,
  isRequired,
  isFixed,
  errorText,
  button,
  secondary,
  pattern,
  formObject,
  maxLength,
  type,
}: TextBoxProps) => {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = formObject;

  return (
    <div className={containerVar[size]}>
      {!secondary && (
        <label className={title} htmlFor={label}>
          <span>{label}</span>
          {isRequired && <i className={circle} />}
        </label>
      )}
      <div className={inputLine}>
        <input
          id={label}
          className={errors?.[label] ? errorInput : input}
          placeholder={placeholderText}
          type={type}
          disabled={isFixed}
          maxLength={maxLength}
          onFocus={() => clearErrors && clearErrors(label)}
          {...register(label, {
            required: isRequired && '필수 입력 항목이에요',
            pattern: pattern,
          })}
        />
        {button}
      </div>
      {descriptionText && (
        <div className={description}>
          <p>{descriptionText}</p>
          {descriptionButton}
        </div>
      )}
      {errors?.[label] && (
        <div className={errorDescription}>
          <p>{errors[label]?.message || errorText}</p>
        </div>
      )}
    </div>
  );
};

export default TextBox;
