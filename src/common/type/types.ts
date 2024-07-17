export interface RecruitingResponse {
  err: boolean;
  season: {
    id: number;
    season: number;
    ybApplicationStart: string;
    ybApplicationEnd: string;
    ybApplicationConfirmStart: string;
    ybApplicationConfirmEnd: string;
    ybApplicationPassConfirmStart: string;
    ybApplicationPassConfirmEnd: string;
    ybFinalPassConfirmStart: string;
    ybFinalPassConfirmEnd: string;
    obApplicationStart: string;
    obApplicationEnd: string;
    obApplicationConfirmStart: string;
    obApplicationConfirmEnd: string;
    obApplicationPassConfirmStart: string;
    obApplicationPassConfirmEnd: string;
    obFinalPassConfirmStart: string;
    obFinalPassConfirmEnd: string;
    name: string;
    obInterviewStart: string;
    obInterviewEnd: string;
    ybInterviewStart: string;
    ybInterviewEnd: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    group: string;
  };
}

export interface RecruitingError {
  err: boolean;
  userMessage: string;
}
