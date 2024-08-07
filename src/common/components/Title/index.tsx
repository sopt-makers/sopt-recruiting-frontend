import { ReactNode } from 'react';

import { useDevice } from '@hooks/useDevice';

import { headingVar } from './style.css';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  const DEVICE_TYPE = useDevice();
  return <h1 className={headingVar[DEVICE_TYPE]}>{children}</h1>;
};

export default Title;
