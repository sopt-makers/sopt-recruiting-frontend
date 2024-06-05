import { container, circle, input, description, title, inputLine, error, errorInput } from './style.css';
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
  pattern,

  register,
  errors,
  ...inputElementProps
}: TextBoxProps) => {
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
          className={`${input} ${errors?.[label] && errorInput}`}
          placeholder={placeholderText}
          disabled={isFixed}
          {...inputElementProps}
          {...register(label, {
            required: isRequired && '필수 입력 항목이에요',
            maxLength: inputElementProps.maxLength,
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
        <div className={`${description} ${error}`}>
          <p>{errors[label]?.message || errorText}</p>
        </div>
      )}
    </div>
  );
};

export default TextBox;
