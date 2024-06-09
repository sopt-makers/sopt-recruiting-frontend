import { container } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface ContentboxProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

const Contentbox = ({ children, ...contentboxElementProps }: ContentboxProps) => {
  return (
    <article className={container} {...contentboxElementProps}>
      {children}
    </article>
  );
};

export default Contentbox;
