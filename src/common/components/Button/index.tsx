import { useId, type ButtonHTMLAttributes, type ReactNode } from 'react';

import ButtonLoading from '@components/loadings/ButtonLoading';

import { container, outsideBox, paddings } from './style.css';

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

  const id = useId();
  const totalWidth = document.getElementById(id)?.offsetWidth;
  let loadingWidth;
  if (totalWidth) {
    loadingWidth = totalWidth - Number(padding.split('x')[1]) * 2;
  }

  return (
    <div className={`${className} ${outsideBox[isLoading || disabled ? 'disabled' : buttonStyle]}`}>
      <button
        type={type}
        id={id}
        className={`${container[buttonStyle]} ${paddings[padding]} ${className}`}
        disabled={isLoading || disabled}
        {...buttonElementProps}>
        {isLoading ? <ButtonLoading width={loadingWidth} /> : children}
      </button>
    </div>
  );
};

export default Button;
