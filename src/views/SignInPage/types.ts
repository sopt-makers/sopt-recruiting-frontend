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
  errorType: 'WRONG_PASSWORD' | 'ACCOUNT_NOT_FOUND' | 'ACCOUNT_LOCKED';
}

export interface SignInResponse {
  err: boolean;
  token: string;
  email: string;
}

export type SignInErrorVariant = 'WRONG_PASSWORD' | 'ACCOUNT_NOT_FOUND' | 'LOCK_WARNING' | null;
