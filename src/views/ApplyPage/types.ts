export interface ApplyRequest {
  picture: File | null;
  part: string;
  address: string;
  birthday: string;
  college: string;
  gender: string;
  knownPath: string;
  leaveAbsence?: boolean;
  major: string;
  mostRecentSeason: number;
  univYear?: number;
  nearestStation: string;
  answers: string;
  willAppjam: boolean;
}

export interface QuestionsRequest {
  season: number;
  group: string;
}

export interface Questions {
  id: number;
  question: string;
  value: string;
  urls: string[];
  charLimit: number;
}

export interface QuestionsResponse {
  err: boolean;
  commonQuestions: {
    part: string;
    recruitingQuestionTypeId: number;
    questions: Questions[];
  };
  partQuestions: {
    part: string;
    recruitingQuestionTypeId: number;
    questions: Questions[];
  }[];
  questionTypes: {
    id: number;
    type: string;
    typeKr: string;
    typeLegacy: null;
  }[];
}

export interface ApplyError {
  err: boolean;
  userMessage: string;
}

export interface Applicant {
  id: number;
  group: string;
  season: number;
  mostRecentSeason: number;
  part: string;
  phone: string;
  email: string;
  name: string;
  address: string;
  gender: string;
  birthday: string;
  college: string;
  major: string;
  univYear: number;
  leaveAbsence: boolean;
  willAppjam: boolean;
  knownPath: string;
  pic: string;
  nearestStation: string;
  applicationPass: boolean;
  finalPass: boolean;
  isDeleted: boolean;
  isForTest: boolean;
  createdAt: string;
  updatedAt: string;
  submit: boolean;
}

export interface Answers {
  id: number;
  group: string;
  season: number;
  recruitingQuestionTypeId: number;
  order: number;
  question: string;
  charLimit: number;
  ignoreCharLimit: boolean;
  isDeleted: boolean;
  isForTest: boolean;
  createdAt: string;
  updatedAt: string;
  answer: {
    id: number;
    recruitingApplicantId: number;
    recruitingQuestionId: number;
    answer: string;
    isDeleted: boolean;
    isForTest: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface ApplyResponse {
  err: boolean;
  applicant: Applicant;
  commonQuestions: Answers[];
  partQuestions: Answers[];
  isSubmit: boolean;
}
