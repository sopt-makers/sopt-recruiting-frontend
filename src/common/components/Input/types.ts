import { InputHTMLAttributes, ReactNode } from 'react';
import { FieldValues, Validate } from 'react-hook-form';

export type SizeType = 'sm' | 'md' | 'lg' | 'TAB' | 'MOB';
export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'pattern'> {
  label: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  errorText?: string;
  pattern?: RegExp;
  validate?: Validate<FieldValues, FieldValues>;
  children?: ReactNode;
  styleType?: 'default' | 'error';
}

export interface CheckUserRequest {
  email: string;
  name: string;
  season?: number;
  group?: string;
}

export interface SendVerificationCodeRequest {
  email: string;
  season: number;
  group: string;
  isSignup: boolean;
}

export interface CheckVerificationCodeRequest {
  email: string;
  code: string;
}

export interface EmailResponse {
  err: boolean;
  message: string;
}
