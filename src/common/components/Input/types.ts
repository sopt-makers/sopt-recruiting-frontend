import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldErrors, UseFormClearErrors, UseFormRegister } from 'react-hook-form';

export type Inputs = {
  타이틀1: string;
  타이틀2: string;
};

export type SizeType = 'sm' | 'md' | 'lg';

export interface FormObjectProps {
  register: UseFormRegister<any>;
  formState: {
    errors: FieldErrors<any>;
  };
  clearErrors?: UseFormClearErrors<any>;
}
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern' | 'size'> {
  label: string;
  placeholderText: string;
  size?: 'sm' | 'md' | 'lg';
  descriptionText?: string;
  descriptionButton?: ReactNode;
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
  button?: ReactNode;
  secondary?: boolean;
  pattern?: RegExp;
  formObject: FormObjectProps;
}
