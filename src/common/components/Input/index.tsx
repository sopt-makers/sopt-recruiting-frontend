import { circle, input, description, title, inputLine, error, errorInput, containerVar } from './style.css';
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
  ...inputElementProps
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
          className={`${input} ${errors?.[label] && errorInput}`}
          placeholder={placeholderText}
          disabled={isFixed}
          {...inputElementProps}
          onFocus={() => clearErrors && clearErrors(label)}
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
