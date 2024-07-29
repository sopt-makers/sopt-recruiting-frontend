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
