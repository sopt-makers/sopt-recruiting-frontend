import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent, useEffect, useState } from 'react';

import { defaultValues } from '@constants/defaultValues';

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
  options,
  size = 'sm',
  formObject,
  required,
  defaultValue,
  ...inputElementProps
}: SelectBoxProps) => {
  const { register, formState, clearErrors } = formObject;
  const { errors } = formState;
  const [value, setValue] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors && clearErrors(label);
    setValue(e.currentTarget.id);
  };

  useEffect(() => {
    if (defaultValue != undefined) {
      label === '학년' ? setValue(`${defaultValue}학년`) : setValue(defaultValue);
    }
  }, [label, setValue, defaultValue]);

  return (
    <div className={containerVar[size]}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {required && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input
          id={label}
          type="text"
          className={selectVariant[errors?.[label] ? 'error' : 'selected']}
          role="combobox"
          readOnly
          value={value}
          {...inputElementProps}
          {...register(label, {
            required: required && '필수 입력 항목이에요.',
          })}
        />
        <IconChevronDown className={icon} />
        <ul className={optionContainer}>
          {options.map((option) => (
            <li role="option" key={option}>
              <input id={option} type="radio" name={label} onChange={handleChange} style={{ display: 'none' }} />
              <label htmlFor={option} className={optionLabel}>
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
      {errors?.[label] && (
        <div className={error}>
          <p>{errors[label]?.message as string}</p>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
