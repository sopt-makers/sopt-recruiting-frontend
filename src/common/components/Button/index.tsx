import { container } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: 'solid' | 'line';
}

const Button = ({ children, className, buttonStyle = 'solid', ...buttonElementProps }: ButtonProps) => {
  return (
    <button type="button" className={`${container[buttonStyle]} ${className}`} {...buttonElementProps}>
      {children}
    </button>
  );
};

export default Button;
