import { circle, title, inputLine, containerVar, inputVar, descriptionVar } from './style.css';
import { TextBoxProps } from './types';

const TextBox = ({
  label,
  size = 'sm',
  descriptionText,
  descriptionButton,
  required,
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
          {required && <i className={circle} />}
        </label>
      )}
      <div className={inputLine}>
        <input
          id={label}
          className={inputVar[errors?.[label] ? 'error' : 'default']}
          onFocus={() => clearErrors && clearErrors(label)}
          {...inputElementProps}
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
