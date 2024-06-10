import { InputHTMLAttributes } from 'react';
import { UseFormReturn } from 'react-hook-form';

export interface SelectBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  options: string[];
  size?: 'sm' | 'lg';
  formObject: Pick<UseFormReturn, 'register' | 'setValue' | 'formState' | 'clearErrors'>;
}
