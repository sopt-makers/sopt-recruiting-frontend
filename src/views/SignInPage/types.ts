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

export interface SignInResponse {
  err: boolean;
  token: string;
}
