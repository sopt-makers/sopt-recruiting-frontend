import { container } from './style.css';

import type { HTMLAttributes } from 'react';

interface ContentboxProps extends HTMLAttributes<HTMLElement> {
  children?: string | number;
}

const Contentbox = ({ children, ...contentboxElementProps }: ContentboxProps) => {
  return (
    <article className={container} {...contentboxElementProps}>
      {children}
    </article>
  );
};

export default Contentbox;
