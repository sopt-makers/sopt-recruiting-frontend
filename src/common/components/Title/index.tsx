import { ReactNode, useContext } from 'react';

import { DeviceTypeContext } from '@store/deviceTypeContext';

import { headingVar } from './style.css';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  const { deviceType } = useContext(DeviceTypeContext);
  return <h1 className={headingVar[deviceType]}>{children}</h1>;
};

export default Title;
