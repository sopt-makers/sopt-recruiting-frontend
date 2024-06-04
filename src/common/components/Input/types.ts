import { InputHTMLAttributes, ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export interface TitleProps {
  children: string;
  isRequired?: boolean;
}

export interface DescriptionProps {
  children: string;
  buttonText?: string;
  buttonHandler?: () => void;
  isError?: boolean;
}

export interface InputProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'maxLength' | 'type' | 'pattern' | 'required'> {
  placeholderText: string;
  //size?: 'xs' | 'sm' | 'md' | 'lg'; 나중에하겠습니다...
  isRequired?: boolean;
  isFixed?: boolean;
  errorText?: string;
}
