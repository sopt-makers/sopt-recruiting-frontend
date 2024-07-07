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

interface Applicant {
  id: number;
  group: string;
  season: number;
  mostRecentSeason: number | null;
  part: string | null;
  phone: string;
  email: string;
  name: string;
  address: string | null;
  gender: string | null;
  birthday: string | null;
  college: string | null;
  major: string | null;
  univYear: number | null;
  leaveAbsence: boolean | null;
  willAppjam: boolean | null;
  knownPath: string | null;
  pic: string | null;
  nearestStation: string | null;
  applicationPass: boolean;
  finalPass: boolean;
  isDeleted: boolean;
  isForTest: boolean;
  createdAt: string;
  updatedAt: string;
  submit: boolean;
}

export interface ApplyResponse {
  err: boolean;
  applicant: Applicant;
  commonQuestions: {}[];
  partQuestions: {}[];
}
