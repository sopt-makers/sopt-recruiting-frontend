import { Link, To } from 'react-router-dom';

import { container, outsideBox, paddings } from './style.css';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: 'solid' | 'line';
  padding?: '15x32' | '13x20' | '10x24' | '15x25';
  to?: To;
  isLink?: boolean;
}

const Button = ({
  children,
  className,
  buttonStyle = 'solid',
  padding = '15x32',
  to,
  isLink = false,
  ...buttonElementProps
}: ButtonProps) => {
  const { disabled, type = 'button' } = buttonElementProps;
  const Tag = isLink ? Link : 'button';

  return (
    <Tag
      to={to as To}
      type={type}
      className={`${className} ${outsideBox[disabled ? 'disabled' : buttonStyle]}`}
      {...buttonElementProps}>
      <div className={`${container[disabled ? 'disabled' : buttonStyle]} ${paddings[padding]} ${className}`}>
        {children}
      </div>
    </Tag>
  );
};

export default Button;
