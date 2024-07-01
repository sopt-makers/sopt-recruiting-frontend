import { colors } from '@sopt-makers/colors';
import { IconAlertCircle } from '@sopt-makers/icons';

import { container } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface CalloutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  size?: 'sm' | 'lg';
}

const Callout = ({ children, size = 'sm', ...calloutElementProps }: CalloutProps) => {
  return (
    <article className={container[size]} {...calloutElementProps}>
      <IconAlertCircle
        style={{
          width: 32,
          minWidth: 32,
          height: 32,
          borderRadius: '50%',
          color: `${colors.yellow700}`,
          fill: `${colors.yellow200}`,
        }}
      />
      {children}
    </article>
  );
};

export default Callout;
