export interface MyRequest {
  email: string;
  season: number;
  group: string;
  password: string;
}

export interface MyResponse {
  err: boolean;
  season: number;
  name: string;
  part: string;
  submit: boolean;
}

export interface ScreeningResultResponse {
  err: boolean;
  season: number;
  seasonName: string;
  group: string;
  name: string;
  pass: boolean;
  interviewStart: string;
  interviewEnd: string;
}

export interface FinalResultResponse {
  err: boolean;
  season: number;
  seasonName: string;
  group: string;
  name: string;
  pass: boolean;
}
