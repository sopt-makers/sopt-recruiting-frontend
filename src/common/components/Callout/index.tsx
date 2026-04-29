import { type HTMLAttributes, type ReactNode } from 'react';
import { buttonVar, container, iconAlertVar, warningWrapper } from './style.css';
import IconAlert from '@components/Callout/icons/IconAlert';

interface CalloutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  size?: 'sm' | 'lg';
  Button?: ReactNode;
}

const Callout = ({ children, size = 'sm', Button, ...calloutElementProps }: CalloutProps) => {
  return (
    <article className={container[size]} {...calloutElementProps}>
      <div className={warningWrapper}>
        <IconAlert className={iconAlertVar} />
        {children}
      </div>
      {Button && <div className={buttonVar}>{Button}</div>}
    </article>
  );
};

export default Callout;
