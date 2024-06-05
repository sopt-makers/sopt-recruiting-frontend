import { requireDot, textareaHeaderStyle } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface TextareaProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  required?: boolean;
}

const TextareaHeader = ({ children, required = false, ...headerElementProps }: TextareaProps) => {
  return (
    <h4 className={`${textareaHeaderStyle}`} {...headerElementProps}>
      <p>
        {children}&nbsp;
        <span className={`${required && requireDot}`} />
      </p>
    </h4>
  );
};

export default TextareaHeader;
