import { container, disableStyle, outsideBox, paddings } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  padding?: '15x32' | '13x20' | '10x24' | '15x25';
  buttonStyle?: 'solid' | 'line';
}

const Button = ({
  children,
  className,
  buttonStyle = 'solid',
  padding = '15x32',
  ...buttonElementProps
}: ButtonProps) => {
  const { disabled } = buttonElementProps;

  return (
    <div className={`${disabled && disableStyle} ${className} ${outsideBox[buttonStyle]}`}>
      <button
        type="button"
        className={`${container[buttonStyle]} ${paddings[padding]} ${className}`}
        {...buttonElementProps}>
        {children}
      </button>
    </div>
  );
};

export default Button;
