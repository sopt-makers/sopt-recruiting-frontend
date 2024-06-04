import { container, checkmark, hiddenCheckbox } from './style.css';

import type { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

const Checkbox = ({ children, ...checkboxElementProps }: CheckboxProps) => {
  return (
    <label className={container}>
      {children}
      <input type="checkbox" className={hiddenCheckbox} {...checkboxElementProps} />
      <span className={checkmark} />
    </label>
  );
};

export default Checkbox;
