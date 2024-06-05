import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

export type Inputs = {
  타이틀1: string;
  타이틀2: string;
};
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'pattern'> {
  label: string;
  placeholderText: string;
  //size?: 'xs' | 'sm' | 'md' | 'lg'; 나중에하겠습니다...
  descriptionText?: string;
  descriptionButton?: ReactNode;
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
  button?: ReactNode;
  secondary?: boolean;
  pattern?: RegExp;

  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
}
