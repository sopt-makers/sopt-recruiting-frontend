import { container } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  buttonStyle?: 'solid' | 'line';
}

const Button = ({ children, buttonStyle = 'solid', ...buttonElementProps }: ButtonProps) => {
  return (
    <button type="button" className={container[buttonStyle]} {...buttonElementProps}>
      {children}
    </button>
  );
};

export default Button;
