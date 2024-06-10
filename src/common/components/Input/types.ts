import { TFormValues } from '@constants/defaultValues';
import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, UseFormReturn, Validate } from 'react-hook-form';

export type SizeType = 'sm' | 'md' | 'lg';

export type TFormValues = Record<string, string>;
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'pattern'> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  errorText?: string;
  button?: ReactNode;
  pattern?: RegExp;
  validate?: Validate<FieldValues, TFormValues>;
  formObject: Pick<UseFormReturn, 'register' | 'formState' | 'clearErrors' | 'trigger'>;
  children: ReactNode;
  styleType?: 'default' | 'error';
}
