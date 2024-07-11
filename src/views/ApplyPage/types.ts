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

export interface QuestionsRequest {
  season: number;
  group: string;
}

export interface QuestionsResponse {
  err: boolean;
  commonQuestions: {
    part: string;
    recruitingQuestionTypeId: number;
    questions: [
      {
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
        recruitingQuestionType: string;
        recruitingQuestionTypeKr: string;
        recruitingQuestionTypeLegacy: null;
      },
      {
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
        recruitingQuestionType: string;
        recruitingQuestionTypeKr: string;
        recruitingQuestionTypeLegacy: null;
      },
    ];
  };
  partQuestions: [
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [
        {
          id: number;
          group: string;
          season: number;
          recruitingQuestionTypeId: number;
          order: number;
          question: string;
          charLimit: null;
          ignoreCharLimit: boolean;
          isDeleted: boolean;
          isForTest: boolean;
          createdAt: string;
          updatedAt: string;
          recruitingQuestionType: string;
          recruitingQuestionTypeKr: string;
          recruitingQuestionTypeLegacy: null;
        },
      ];
    },
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [];
    },
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [];
    },
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [];
    },
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [];
    },
    {
      part: string;
      recruitingQuestionTypeId: number;
      questions: [];
    },
  ];
  questionTypes: [
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
    {
      id: number;
      type: string;
      typeKr: string;
      typeLegacy: null;
    },
  ];
}

export interface ApplyError {
  err: boolean;
  userMessage: string;
}

export interface FormValues {
  picture: File;
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
  answers: {}[];
  willAppjam: boolean;
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

export interface ApplyResponse {
  err: boolean;
  applicant: Applicant;
  commonQuestions: {}[];
  partQuestions: {}[];
}
