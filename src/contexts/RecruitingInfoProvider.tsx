import { createContext, type ReactNode, useCallback, useContext, useState } from 'react';

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
  isMakers?: boolean;
};

interface RecruitingInfoContextType {
  recruitingInfo: RecruitingInfoType;
  handleSaveRecruitingInfo: (obj: RecruitingInfoType) => void;
}

export const RecruitingInfoContext = createContext<RecruitingInfoContextType>({
  recruitingInfo: {},
  handleSaveRecruitingInfo: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useRecruitingInfo = () => {
  const contextValue = useContext(RecruitingInfoContext);

  if (!contextValue) {
    throw new Error('RecruitingInfoContext must be called from within an DeviceTypeProvider');
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
