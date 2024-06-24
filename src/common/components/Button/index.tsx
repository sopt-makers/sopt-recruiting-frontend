import ButtonLoading from '@components/loadings/ButtonLoading';

import { container, outsideBox, paddings } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  padding?: '15x32' | '13x20' | '10x24' | '15x25';
  buttonStyle?: 'solid' | 'line';
  isLoading?: boolean;
}

const Button = ({
  children,
  className,
  buttonStyle = 'solid',
  padding = '15x32',
  isLoading = false,
  ...buttonElementProps
}: ButtonProps) => {
  const { disabled, type = 'button' } = buttonElementProps;

  return (
    <div className={`${className} ${outsideBox[isLoading || disabled ? 'disabled' : buttonStyle]}`}>
      <button
        type={type}
        className={`${container[buttonStyle]} ${paddings[padding]} ${className}`}
        disabled={isLoading || disabled}
        {...buttonElementProps}>
        {isLoading ? <ButtonLoading /> : children}
      </button>
    </div>
  );
};

export default Button;
