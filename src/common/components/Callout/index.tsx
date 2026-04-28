import { IconAlertCircle } from '@sopt-makers/icons';
import { type HTMLAttributes, type ReactNode } from 'react';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonVar, container, iconVar, warningWrapperVar } from './style.css';

interface CalloutProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  size?: 'sm' | 'lg';
  Button?: ReactNode;
}

const Callout = ({ children, size = 'sm', Button, ...calloutElementProps }: CalloutProps) => {
  const { deviceType } = useDeviceType();

  return (
    <article className={container[deviceType === 'DESK' ? size : deviceType]} {...calloutElementProps}>
      <div className={warningWrapperVar[deviceType]}>
        <IconAlertCircle className={iconVar} />
        {children}
      </div>
      {Button && <div className={buttonVar[deviceType]}>{Button}</div>}
    </article>
  );
};

export default Callout;
