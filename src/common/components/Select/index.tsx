import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent } from 'react';

import {
  circle,
  containerVar,
  error,
  icon,
  option,
  optionContainer,
  selectContainer,
  selectVariant,
  title,
} from './style.css';

const SelectBox = ({ formObject }) => {
  const {
    register,
    setValue,
    formState: { defaultValues, dirtyFields, errors },
  } = formObject;
  const isRequired = true;
  const label = '성별';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(label, e.currentTarget.id, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div className={containerVar['sm']}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {isRequired && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input
          type="button"
          className={selectVariant[errors?.[label] ? 'error' : dirtyFields[label] ? 'selected' : 'default']}
          role="combobox"
          {...register(label, { validate: (v) => v !== defaultValues[label] || '필수 항목입니다' })}
        />
        <IconChevronDown className={icon} />
        <ul className={optionContainer}>
          <li role="option">
            <input id="남자" type="radio" name={label} onChange={handleChange} />
            <label htmlFor="남자" className={option}>
              남자
            </label>
          </li>
          <li role="option">
            <input id="여자" type="radio" name={label} onChange={handleChange} />
            <label htmlFor="여자" className={option}>
              여자
            </label>
          </li>
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
