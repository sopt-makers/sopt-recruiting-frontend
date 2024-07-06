export interface ApplyRequest {
  picture: File | null;
  part: string;
  address: string;
  birthday: string;
  college: string;
  gender: string;
  knownPath: string;
  leaveAbsence: boolean;
  major: string;
  mostRecentSeasonStr: string;
  univYear: number;
  nearestStation: string;
  answers: [];
  willAppjam: boolean;
}

export interface ApplyError {
  err: boolean;
  userMessage: string;
}

export interface ApplyResponse {
  err: boolean;
  applicant: object;
  commonQuestions: object;
  partQuestions: object;
}
