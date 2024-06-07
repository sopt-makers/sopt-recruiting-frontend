import { circle, title, inputLine, containerVar, inputVar, descriptionVar } from './style.css';
import { TextBoxProps } from './types';

const TextBox = ({
  label,
  placeholder,
  size = 'sm',
  descriptionText,
  descriptionButton,
  required,
  disabled,
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
          {required && <i className={circle} />}
        </label>
      )}
      <div className={inputLine}>
        <input
          id={label}
          className={inputVar[errors?.[label] ? 'error' : 'default']}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          maxLength={maxLength}
          onFocus={() => clearErrors && clearErrors(label)}
          {...register(label, {
            required: required && '필수 입력 항목이에요',
            pattern: pattern,
          })}
        />
        {button}
      </div>
      {descriptionText && (
        <div className={descriptionVar['default']}>
          <p>{descriptionText}</p>
          {descriptionButton}
        </div>
      )}
      {errors?.[label] && (
        <div className={descriptionVar['error']}>
          <p>{errors[label]?.message || errorText}</p>
        </div>
      )}
    </div>
  );
};

export default TextBox;
