import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldErrors, UseFormClearErrors, UseFormRegister } from 'react-hook-form';

export type SizeType = 'sm' | 'md' | 'lg';

export interface FormObjectProps {
  register: UseFormRegister<any>;
  formState: {
    errors: FieldErrors<any>;
  };
  clearErrors?: UseFormClearErrors<any>;
}
export interface TextBoxProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'maxLength' | 'placeholder' | 'required' | 'disabled'> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  errorText?: string;
  button?: ReactNode;
  pattern?: RegExp;
  formObject: FormObjectProps;
  children: ReactNode;
  styleType?: 'default' | 'error';
}
