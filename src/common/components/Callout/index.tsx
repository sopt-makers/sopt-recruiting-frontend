import { colors } from '@sopt-makers/colors';
import { IconAlertCircle } from '@sopt-makers/icons';

import { button, container, warningWrapper } from './style.css';

import type { HTMLAttributes, ReactNode } from 'react';

interface CalloutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  size?: 'sm' | 'lg';
  Button?: ReactNode;
}

const Callout = ({ children, size = 'sm', Button, ...calloutElementProps }: CalloutProps) => {
  return (
    <article className={container[size]} {...calloutElementProps}>
      <div className={warningWrapper}>
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
      </div>
      {Button && <div className={button}>{Button}</div>}
    </article>
  );
};

export default Callout;
