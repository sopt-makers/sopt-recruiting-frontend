import { requireDot, textareaHeaderStyle } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface TextareaHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  maxCount: number;
  required?: boolean;
}

const TextareaHeader = ({ children, maxCount, required = false, ...headerElementProps }: TextareaHeaderProps) => {
  return (
    <h4 className={`${textareaHeaderStyle}`} {...headerElementProps}>
      <p>
        <span>{children}</span>
        <span> ({maxCount}자) </span>
        <span className={`${required && requireDot}`} />
      </p>
    </h4>
  );
};

export default TextareaHeader;
