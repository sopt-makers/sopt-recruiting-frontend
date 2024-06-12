import { requireDot, labelStyle } from './style.css';

import type { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string | number;
  maxCount: number;
  required: boolean;
  label: string;
}

const Label = ({ children, maxCount, required, label, ...headerElementProps }: LabelProps) => {
  return (
    <h4 className={`${labelStyle}`} {...headerElementProps}>
      <label htmlFor={label}>
        <span>{children}</span>
        <span> ({maxCount}자) </span>
        {required && <i className={requireDot} />}
      </label>
    </h4>
  );
};

export default Label;
