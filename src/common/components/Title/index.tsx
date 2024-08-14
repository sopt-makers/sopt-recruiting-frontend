import { ReactNode } from 'react';

import { useDevice } from '@hooks/useDevice';

import { headingVar } from './style.css';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  const deviceType = useDevice();
  return <h1 className={headingVar[deviceType]}>{children}</h1>;
};

export default Title;
