import { IconChevronDown } from '@sopt-makers/icons';

import { container, checkboxContainer, checkmark, hiddenCheckbox, iconStyle } from './style.css';

import type { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  showIcon?: boolean;
}

const Checkbox = ({ children, showIcon = false, ...checkboxElementProps }: CheckboxProps) => {
  return (
    <div className={container}>
      <label className={checkboxContainer}>
        {children}
        <input type="checkbox" className={hiddenCheckbox} {...checkboxElementProps} />
        <span className={checkmark} />
      </label>
      {showIcon && (
        <div className={iconStyle}>
          <IconChevronDown />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
