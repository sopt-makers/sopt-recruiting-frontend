import { container } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface ContentBoxProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const ContentBox = ({ children, ...contentBoxElementProps }: ContentBoxProps) => {
  return (
    <article className={container} {...contentBoxElementProps}>
      {children}
    </article>
  );
};

export default ContentBox;
