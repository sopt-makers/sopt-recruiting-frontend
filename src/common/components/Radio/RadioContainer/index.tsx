import { ReactNode } from 'react';

import { container } from './style.css';

interface RadioContainerProps {
  children: ReactNode;
}

const RadioContainer = ({ children }: RadioContainerProps) => {
  return <div className={container}>{children}</div>;
};

export default RadioContainer;
