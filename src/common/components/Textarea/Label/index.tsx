import { requireDot, labelStyle } from './style.css';

import type { HTMLAttributes } from 'react';

interface LabelProps extends HTMLAttributes<HTMLHeadingElement> {
  children: string | number;
  maxCount: number;
  required: boolean;
}

const Label = ({ children, maxCount, required, ...headerElementProps }: LabelProps) => {
  return (
    <h4 className={`${labelStyle}`} {...headerElementProps}>
      <p>
        <span>{children}</span>
        <span> ({maxCount}자) </span>
        {required && <i className={requireDot} />}
      </p>
    </h4>
  );
};

export default Label;
