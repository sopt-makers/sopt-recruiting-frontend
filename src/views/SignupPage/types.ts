export interface SignUpRequest {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  phone: string;
  season: number;
  group: string;
}

export interface SignUpResponse {
  err: boolean;
  email: string;
  token: string;
}

export interface SignUpError {
  err: boolean;
  message: string;
}
