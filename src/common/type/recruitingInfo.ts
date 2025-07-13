export interface RecruitingResponse {
  err: boolean;
  season: {
    id: number;
    season: number;
    name: string;
    group: string;
    applicationStart: string;
    applicationEnd: string;
    applicationResultStart: string;
    applicationResultEnd: string;
    finalResultStart: string;
    finalResultEnd: string;
    interviewStart: string;
    interviewEnd: string;
  };
}
