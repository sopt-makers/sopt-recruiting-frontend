import { IconChevronDown } from '@sopt-makers/icons';

import { container, checkboxContainer, checkmark, hiddenCheckbox, requireDot, iconStyle } from './style.css';

import type { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  showIcon?: boolean;
  required?: boolean;
}

const Checkbox = ({ children, showIcon = false, required = false, ...checkboxElementProps }: CheckboxProps) => {
  return (
    <div className={container}>
      <label className={checkboxContainer}>
        <input type="checkbox" className={hiddenCheckbox} {...checkboxElementProps} />
        <span className={checkmark} />
        <span>{children}</span>
        {required && <i className={requireDot} />}
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
