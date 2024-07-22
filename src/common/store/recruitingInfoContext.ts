import { createContext } from 'react';

export type RecruitingInfoType = {
  name?: string;
  soptName?: string;
  season?: number;
  group?: string;
  applicationStart?: string;
  applicationEnd?: string;
  applicationConfirmStart?: string;
  applicationConfirmEnd?: string;
  applicationPassConfirmStart?: string;
  applicationPassConfirmEnd?: string;
  finalPassConfirmStart?: string;
  finalPassConfirmEnd?: string;
  interviewStart?: string;
  interviewEnd?: string;
};

interface RecruitingInfoContextType {
  recruitingInfo: RecruitingInfoType;
  handleSaveRecruitingInfo: (obj: RecruitingInfoType) => void;
}

export const RecruitingInfoContext = createContext<RecruitingInfoContextType>({
  recruitingInfo: {},
  handleSaveRecruitingInfo: () => {},
});
