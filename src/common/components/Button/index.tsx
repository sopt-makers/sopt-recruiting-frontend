import { useId, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link, To } from 'react-router-dom';

import ButtonLoading from 'views/loadings/ButtonLoading';

import { container, outsideBox, paddings } from './style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  buttonStyle?: 'solid' | 'line';
  isLoading?: boolean;
  padding?: '15x32' | '13x20' | '10x24' | '15x25';
  to?: To;
  isLink?: boolean;
}

const Button = ({
  children,
  className,
  buttonStyle = 'solid',
  padding = '15x32',
  isLoading = false,
  to,
  isLink = false,
  ...buttonElementProps
}: ButtonProps) => {
  const { disabled, type = 'button' } = buttonElementProps;
  const Tag = isLink ? Link : 'button';

  const id = useId();
  const totalWidth = document.getElementById(id)?.offsetWidth;
  let loadingWidth;
  if (totalWidth) {
    loadingWidth = totalWidth - Number(padding.split('x')[1]) * 2;
  }

  return (
    <Tag
      to={to as To}
      type={type}
      className={`${className} ${outsideBox[isLoading || disabled ? 'disabled' : buttonStyle]}`}
      disabled={isLoading || disabled}
      {...buttonElementProps}>
      <div
        className={`${container[isLoading || disabled ? 'disabled' : buttonStyle]} ${paddings[padding]} ${className}`}>
        {isLoading ? <ButtonLoading width={loadingWidth} /> : children}
      </div>
    </Tag>
  );
};

export default Button;
