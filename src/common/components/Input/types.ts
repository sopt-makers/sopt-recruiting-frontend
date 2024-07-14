import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, UseFormReturn, Validate } from 'react-hook-form';

import { TFormValues } from '@constants/defaultValues';

export type SizeType = 'sm' | 'md' | 'lg';
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'pattern'> {
  label: string;
  size?: 'sm' | 'md' | 'lg';
  errorText?: string;
  pattern?: RegExp;
  validate?: Validate<FieldValues, TFormValues>;
  formObject: Pick<
    UseFormReturn,
    'register' | 'formState' | 'clearErrors' | 'trigger' | 'watch' | 'setError' | 'getValues' | 'setValue'
  >;
  children?: ReactNode;
  styleType?: 'default' | 'error';
}

export interface InputButtonProps {
  text: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
export interface TimerProps {
  isActive: boolean;
  onResetTimer: () => void;
}

export interface CheckEmailRequest {
  email: string;
  name: string;
  season: number;
  group: string;
}

export interface SendEmailRequest {
  email: string;
  season: number;
}

export interface CodeRequest {
  email: string;
  code: string;
}

export interface EmailResponse {
  err: boolean;
  message: string;
}
