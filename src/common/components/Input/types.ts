import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderText: string;
  //size?: 'xs' | 'sm' | 'md' | 'lg'; 나중에하겠습니다...
  descriptionText?: string;
  descriptionButton?: ReactNode;
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
  button?: ReactNode;
}
