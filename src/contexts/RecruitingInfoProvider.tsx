import { createContext, type ReactNode, useCallback, useContext, useState } from 'react';

type RecruitingInfoType = {
  name?: string;
  soptName?: string;
  season?: number;
  group?: string;
  applicationStart?: string;
  applicationEnd?: string;
  applicationResultStart?: string;
  applicationResultEnd?: string;
  finalResultStart?: string;
  finalResultEnd?: string;
  interviewStart?: string;
  interviewEnd?: string;
  isMakers?: boolean;
};

interface RecruitingInfoContextType {
  recruitingInfo: RecruitingInfoType;
  handleSaveRecruitingInfo: (obj: RecruitingInfoType) => void;
}

const RecruitingInfoContext = createContext<RecruitingInfoContextType>({
  recruitingInfo: {},
  handleSaveRecruitingInfo: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useRecruitingInfo = () => {
  const contextValue = useContext(RecruitingInfoContext);

  if (!contextValue) {
    throw new Error('RecruitingInfoContext는 RecruitingInfoProvider 내부에 있어야 함');
  }

  return contextValue;
};

const RecruitingInfoProvider = ({ children }: { children: ReactNode }) => {
  const [recruitingInfo, setRecruitingInfo] = useState<RecruitingInfoType>({});

  const handleSaveRecruitingInfo = useCallback((obj: RecruitingInfoType) => {
    setRecruitingInfo((prev) => ({ ...prev, ...obj }));
  }, []);

  const recruitingInfoContextValue = {
    recruitingInfo,
    handleSaveRecruitingInfo,
  };

  return <RecruitingInfoContext.Provider value={recruitingInfoContextValue}>{children}</RecruitingInfoContext.Provider>;
};

export default RecruitingInfoProvider;
