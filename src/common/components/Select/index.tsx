import { IconChevronDown } from '@sopt-makers/icons';
import { ChangeEvent, useState } from 'react';

import { circle, containerVar, icon, option, optionContainer, select, title } from './style.css';

const SelectBox = () => {
  const isRequired = true;
  const label = '성별';
  const [selected, setSelected] = useState<string>('성별을 선택해주세요');

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <div className={containerVar['sm']}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {isRequired && <i className={circle} />}
      </label>
      <button className={select} type="button" role="combobox">
        <span>{selected}</span>
        <IconChevronDown className={icon} />
      </button>
      <ul className={optionContainer}>
        <li role="option">
          <input id="남자" type="radio" name={label} onChange={handleClick} />
          <label htmlFor="남자" className={option}>
            남자
          </label>
        </li>
        <li role="option">
          <input id="여자" type="radio" name={label} onChange={handleClick} />
          <label htmlFor="여자" className={option}>
            여자
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SelectBox;
