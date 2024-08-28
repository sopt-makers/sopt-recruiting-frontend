import { ReactNode } from 'react';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import { headingVar } from './style.css';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  const { deviceType } = useDeviceType();
  return <h1 className={headingVar[deviceType]}>{children}</h1>;
};

export default Title;
