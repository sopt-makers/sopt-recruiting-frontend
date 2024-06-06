import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent, useState } from 'react';

import { circle, containerVar, icon, option, optionContainer, select, selectContainer, title } from './style.css';

const SelectBox = ({ formObject }) => {
  const { register, setValue, getValues } = formObject;
  const isRequired = true;
  const label = '성별';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(label, e.currentTarget.id);
  };

  return (
    <div className={containerVar['sm']}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {isRequired && <i className={circle} />}
      </label>
      <div className={selectContainer}>
        <input value="성별을 선택해주세요" className={select} type="button" role="combobox" {...register(label)} />
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
    </div>
  );
};

export default SelectBox;
