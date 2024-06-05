import { container, disableStyle, outsideBox } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: 'solid' | 'line';
}

const Button = ({ children, className, buttonStyle = 'solid', ...buttonElementProps }: ButtonProps) => {
  const { disabled } = buttonElementProps;

  return (
    <div className={`${disabled && disableStyle} ${className} ${outsideBox[buttonStyle]}`}>
      <button type="button" className={`${container[buttonStyle]} ${className}`} {...buttonElementProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
