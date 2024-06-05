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
export interface TextBoxProps extends Pick<InputHTMLAttributes<HTMLInputElement>, 'type' | 'maxLength'> {
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
