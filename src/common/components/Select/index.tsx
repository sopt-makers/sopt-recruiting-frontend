import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent } from 'react';

import {
  circle,
  containerVar,
  error,
  icon,
  optionContainer,
  optionLabel,
  selectContainer,
  selectVariant,
  title,
} from './style.css';
import { SelectBoxProps } from './type';

const SelectBox = ({
  label,
  name,
  options,
  size = 'sm',
  formObject,
  required,
  ...inputElementProps
}: SelectBoxProps) => {
  const { register, formState, clearErrors, setValue } = formObject;
  const { errors } = formState;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors && clearErrors(name);
    setValue(name, e.currentTarget.id);
  };

  return (
    <div className={containerVar[size]}>
      <label className={title} htmlFor={name}>
        <span>{label}</span>
        {required && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input
          id={name}
          type="text"
          className={selectVariant[errors?.[name] ? 'error' : 'selected']}
          role="combobox"
          readOnly
          {...inputElementProps}
          {...register(name, {
            required: required && '필수 입력 항목이에요.',
          })}
        />
        <IconChevronDown className={icon} />
        <ul className={optionContainer}>
          {options.map((option) => (
            <li role="option" key={option}>
              <input id={option} type="radio" name={name} onChange={handleChange} style={{ display: 'none' }} />
              <label htmlFor={option} className={optionLabel}>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {errors?.[name] && (
        <div className={error}>
          <p>{errors[name]?.message as string}</p>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
