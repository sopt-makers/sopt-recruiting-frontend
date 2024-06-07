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

const SelectBox = ({ label, options, size = 'sm', isRequired, formObject }: SelectBoxProps) => {
  const {
    register,
    setValue,
    formState: { defaultValues, dirtyFields, errors, clearErrors },
  } = formObject;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearErrors && clearErrors(label);
    setValue(label, e.currentTarget.id, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div className={containerVar[size]}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {isRequired && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input
          type="button"
          className={selectVariant[errors?.[label] ? 'error' : dirtyFields[label] ? 'selected' : 'default']}
          role="combobox"
          onFocus={() => clearErrors && clearErrors(label)}
          {...register(label, { validate: (v) => v !== defaultValues[label] || '필수 입력 항목이에요.' })}
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
          <p>{errors[label]?.message}</p>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
