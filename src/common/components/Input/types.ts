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
export interface TextBoxProps {
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
  maxLength?: number;
  formObject: FormObjectProps;
}
