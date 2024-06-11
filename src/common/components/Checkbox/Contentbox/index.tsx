import { container } from './style.css';

import type { HTMLAttributes } from 'react';

interface ContentboxProps extends HTMLAttributes<HTMLElement> {
  children?: string | number;
  isOpen?: boolean;
}

const Contentbox = ({ children, isOpen = false, ...contentboxElementProps }: ContentboxProps) => {
  return (
    <>
      {isOpen && (
        <article className={container} {...contentboxElementProps}>
          {children}
        </article>
      )}
    </>
  );
};

export default Contentbox;
