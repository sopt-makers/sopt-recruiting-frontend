import { colors } from '@sopt-makers/colors';
import { IconAlertCircle } from '@sopt-makers/icons';
import { type HTMLAttributes, type ReactNode } from 'react';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { buttonVar, container, warningWrapperVar } from './style.css';

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
      {Button && <div className={buttonVar[deviceType]}>{Button}</div>}
    </article>
  );
};

export default Callout;
