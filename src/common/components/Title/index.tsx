import { ReactNode } from 'react';

import { heading } from './style.css';

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return <h1 className={heading}>{children}</h1>;
};

export default Title;
