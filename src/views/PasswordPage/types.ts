export interface PasswordRequest {
  email: string;
  season: number;
  group: string;
  password: string;
  passwordCheck: string;
}

export interface PasswordResponse {
  err: boolean;
  email: string;
  message: string;
}

export interface PasswordError {
  err: boolean;
  message: string;
}
