import { InputHTMLAttributes } from 'react';

export interface SelectBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  name: string;
  options: string[];
  size?: 'sm' | 'lg';
}
