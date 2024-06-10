import { container } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface ContentboxProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  isOpen?: boolean;
}

const Contentbox = ({ children, isOpen = false, ...contentboxElementProps }: ContentboxProps) => {
  return (
    <article className={container[isOpen ? 'default' : 'open']} {...contentboxElementProps}>
      {children}
    </article>
  );
};

export default Contentbox;
