export interface ApplyRequest {
  pictureKey?: string;
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
  answers: AnswerRequest[];
  willAppjam: boolean;
  // 최종 제출 시 필요한 필드들
  name: string;
  email: string;
  phone: string;
  group: string;
  season: number;
}

export interface QuestionsRequest {
  season: number;
  group: string;
}

// 서버 구조에 맞는 QuestionResponse 타입 정의
export interface QuestionResponse {
  id: number;
  order: number;
  question: string;
  answer?: string;
  urls: string[];
  charLimit?: number;
  isFile?: boolean;
  placeholder?: string;
  optional?: boolean;
  isDescription?: boolean;
}

export interface QuestionsResponse {
  err: boolean;
  commonQuestions: {
    part: string;
    questions: QuestionResponse[];
  };
  partQuestions: {
    part: string;
    questions: QuestionResponse[];
  }[];
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
  pictureUrl: string;
  pictureKey: string;
  nearestStation: string;
  applicationPass: boolean;
  finalPass: boolean;
  submit: boolean;
}

export interface Answers {
  id: number;
  group: string;
  season: number;
  order: number;
  question: string;
  charLimit: number;
  answer: {
    id: number;
    recruitingApplicantId: number;
    recruitingQuestionId: number;
    answer: string;
    file: string;
    fileName: string;
  };
}

export interface ApplyResponse {
  err: boolean;
  applicant: Applicant;
  commonQuestions: Answers[];
  partQuestions: Answers[];
  isSubmit: boolean;
}

// AnswerRequest 타입 추가 (fileKey, fileName 포함)
export interface AnswerRequest {
  recruitingQuestionId: number;
  answer: string;
  fileKey?: string;
  fileName?: string;
}
