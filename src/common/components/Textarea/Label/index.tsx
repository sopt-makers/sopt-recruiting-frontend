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
        <span style={{ position: 'relative' }}>
          {' '}
          ({maxCount}자)
          {required && <i className={requireDot} />}
        </span>
      </label>
    </h4>
  );
};

export default Label;
