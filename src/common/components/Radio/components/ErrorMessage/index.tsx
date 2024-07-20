import { ReactNode } from 'react';

import { errorStyle } from './style.css';

interface ErrorMessageProps {
  children: ReactNode;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className={errorStyle}>{children}</p>;
};

export default ErrorMessage;
