import { LinkProps, To } from 'react-router-dom';

import { container, outsideBox, paddings } from './style.css';

import type { ButtonHTMLAttributes, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: 'solid' | 'line';
  padding?: '15x32' | '13x20' | '10x24' | '15x25';
  to?: To;
  Tag?: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>> | 'button';
}

const Button = ({
  children,
  className,
  buttonStyle = 'solid',
  padding = '15x32',
  to,
  Tag = 'button',
  ...buttonElementProps
}: ButtonProps) => {
  const { disabled, type = 'button' } = buttonElementProps;

  return (
    <div className={`${className} ${outsideBox[disabled ? 'disabled' : buttonStyle]}`}>
      <Tag
        to={to as To}
        type={type}
        className={`${container[buttonStyle]} ${paddings[padding]} ${className}`}
        {...buttonElementProps}>
        {children}
      </Tag>
    </div>
  );
};

export default Button;
