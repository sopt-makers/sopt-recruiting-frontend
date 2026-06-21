import { SIGN_IN_ERROR_TYPE } from './constants/signInError';

export interface SignInRequest {
  email: string;
  season: number;
  group: string;
  password: string;
}

export interface SignInError {
  err: boolean;
  message: string;
}

export interface SignInErrorData {
  loginFailCount: number;
  errorType: (typeof SIGN_IN_ERROR_TYPE)[keyof typeof SIGN_IN_ERROR_TYPE];
}

export interface SignInResponse {
  err: boolean;
  token: string;
  email: string;
}

export type SignInErrorVariant = (typeof SIGN_IN_ERROR_TYPE)[keyof typeof SIGN_IN_ERROR_TYPE] | null;
