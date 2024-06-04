import { inputStyle, labelStyle } from './style.css';

import type { InputHTMLAttributes, ReactNode } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  label: string;
}

const Radio = ({ label, ...radioElementProps }: RadioProps) => {
  return (
    <div>
      <input className={inputStyle} type="radio" id={label} {...radioElementProps} />
      <label className={labelStyle} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
