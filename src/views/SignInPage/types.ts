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
  locked: boolean;
}

export interface SignInResponse {
  err: boolean;
  token: string;
  email: string;
}

export type SignInErrorVariant = 'mismatch' | 'block-warning' | null;
