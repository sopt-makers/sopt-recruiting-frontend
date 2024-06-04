import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholderText: string;
  //size?: 'xs' | 'sm' | 'md' | 'lg'; 나중에하겠습니다...
  descriptionText?: string;
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
  buttonText?: string;
  buttonHandler?: () => void;
  button?: ReactNode;
}
