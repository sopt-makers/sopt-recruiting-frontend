export interface MyRequest {
  email: string;
  season: number;
  group: string;
  password: string;
}

export interface MyError {
  err: boolean;
  userMessage: string;
}

export interface MyResponse {
  err: boolean;
  season: number;
  name: string;
  part: string;
  submit: boolean;
}
