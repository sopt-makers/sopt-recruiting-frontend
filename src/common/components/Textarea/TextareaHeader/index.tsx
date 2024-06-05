import { textareaHeaderStyle } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface TextareaProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

const TextareaHeader = ({ children, ...headerElementProps }: TextareaProps) => {
  return (
    <h4 className={textareaHeaderStyle} {...headerElementProps}>
      {children}
    </h4>
  );
};

export default TextareaHeader;
