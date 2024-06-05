import { IconChevronDown } from '@sopt-makers/icons';

import { circle, containerVar, icon, input, option, optionContainer, select, title } from './style.css';

const SelectBox = () => {
  const isRequired = true;
  const label = '성별';

  return (
    <div className={containerVar['sm']}>
      <label className={title} htmlFor={label}>
        <span>{label}</span>
        {isRequired && <i className={circle} />}
      </label>
      <button className={select} type="button" role="combobox">
        <span>성별을 선택해주세요</span>
        <IconChevronDown className={icon} />
      </button>
      <ul className={optionContainer}>
        <li role="option" className={option}>
          남자
        </li>
        <li role="option" className={option}>
          여자
        </li>
      </ul>
    </div>
  );
};

export default SelectBox;
