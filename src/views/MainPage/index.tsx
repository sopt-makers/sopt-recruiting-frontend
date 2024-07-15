import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useContext, useEffect } from 'react';

import { UserInfoContext } from '@store/userInfoContext';
import ApplyPage from 'views/ApplyPage';
import BigLoading from 'views/loadings/BigLoding';
import SignInPage from 'views/SignInPage';

import { getRecruitingInfo } from './apis';
import { RecruitingError, RecruitingResponse } from './types';

const MainPage = () => {
  const { handleSaveUserInfo } = useContext(UserInfoContext);
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  const { data, isLoading } = useQuery<
    AxiosResponse<RecruitingResponse, null>,
    AxiosError<RecruitingError, null>,
    AxiosResponse<RecruitingResponse, null>,
    string[]
  >({
    queryKey: ['get-recruiting-info'],
    queryFn: getRecruitingInfo,
  });

  useEffect(() => {
    const {
      name,
      season,
      group,
      ybApplicationStart,
      obApplicationStart,
      ybApplicationEnd,
      obApplicationEnd,
      ybApplicationConfirmStart,
      obApplicationConfirmStart,
      ybApplicationConfirmEnd,
      obApplicationConfirmEnd,
      ybApplicationPassConfirmStart,
      obApplicationPassConfirmStart,
      ybApplicationPassConfirmEnd,
      obApplicationPassConfirmEnd,
      ybFinalPassConfirmStart,
      obFinalPassConfirmStart,
      ybFinalPassConfirmEnd,
      obFinalPassConfirmEnd,
      ybInterviewStart,
      obInterviewStart,
      ybInterviewEnd,
      obInterviewEnd,
    } = data?.data.season || {};

    handleSaveUserInfo({
      name,
      season,
      group,
      applicationStart: group === 'YB' ? ybApplicationStart : obApplicationStart, // 서류 지원 시작
      applicationEnd: group === 'YB' ? ybApplicationEnd : obApplicationEnd, // 서류 지원 끝
      applicationConfirmStart: group === 'YB' ? ybApplicationConfirmStart : obApplicationConfirmStart, // 서류 지원 확인 시작
      applicationConfirmEnd: group === 'YB' ? ybApplicationConfirmEnd : obApplicationConfirmEnd, // 서류 지원 확인 종료
      applicationPassConfirmStart: group === 'YB' ? ybApplicationPassConfirmStart : obApplicationPassConfirmStart, // 서류 합격 확인 시작
      applicationPassConfirmEnd: group === 'YB' ? ybApplicationPassConfirmEnd : obApplicationPassConfirmEnd, // 서류 합격 확인 종료
      finalPassConfirmStart: group === 'YB' ? ybFinalPassConfirmStart : obFinalPassConfirmStart, // 최종 합격 확인 시작
      finalPassConfirmEnd: group === 'YB' ? ybFinalPassConfirmEnd : obFinalPassConfirmEnd, // 최종 합격 확인 종료
      interviewStart: group === 'YB' ? ybInterviewStart : obInterviewStart, // 면접 시작
      interviewEnd: group === 'YB' ? ybInterviewEnd : obInterviewEnd, // 면접 끝
    });
  }, [data, handleSaveUserInfo]);

  if (isLoading) return <BigLoading />;

  return <>{isSignedIn ? <ApplyPage /> : <SignInPage />}</>;
};

export default MainPage;
