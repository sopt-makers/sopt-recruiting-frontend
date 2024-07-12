import { ReactNode } from 'react';

import { container } from './style.css';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={container}>{children}</div>;
};

export default Container;
