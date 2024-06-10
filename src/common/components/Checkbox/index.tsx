import { IconChevronDown } from '@sopt-makers/icons';

import { container, checkboxContainer, checkmark, hiddenCheckbox, requireDot, iconStyle } from './style.css';

import type { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: string | number;
  showIcon?: boolean;
  required?: boolean;
  isOpen?: boolean;
}

const Checkbox = ({
  children,
  showIcon = false,
  required = false,
  isOpen = false,
  onClick,
  ...checkboxElementProps
}: CheckboxProps) => {
  return (
    <div className={container}>
      <label className={checkboxContainer}>
        <input type="checkbox" className={hiddenCheckbox} {...checkboxElementProps} />
        <span className={checkmark} />
        <span>{children}</span>
        {required && <i className={requireDot} />}
      </label>
      {showIcon && (
        <div className={iconStyle[isOpen ? 'isOpen' : 'default']} onClick={onClick}>
          <IconChevronDown />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
