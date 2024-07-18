import { isAfter, isBefore } from 'date-fns';
import { useContext, useEffect } from 'react';

import useGetRecruitingInfo from '@hooks/useGetRecruitingInfo';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import BigLoading from 'views/loadings/BigLoding';
import SignedInPage from 'views/SignedInPage';
import SignInPage from 'views/SignInPage';

const MainPage = () => {
  const {
    recruitingInfo: { applicationStart, finalPassConfirmEnd },
    handleSaveRecruitingInfo,
  } = useContext(RecruitingInfoContext);
  const isSignedIn = localStorage.getItem('soptApplyAccessToken');

  const { data, isLoading } = useGetRecruitingInfo();

  useEffect(() => {
    if (!data) return;

    const {
      season,
      group,
      ybApplicationStart,
      obApplicationStart,
      ybApplicationEnd,
      obApplicationEnd,
      // ybApplicationConfirmStart,
      // obApplicationConfirmStart,
      // ybApplicationConfirmEnd,
      // obApplicationConfirmEnd,
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
    } = data.data.season;

    const applicationStart = group === 'YB' ? ybApplicationStart : obApplicationStart;
    const applicationEnd = group === 'YB' ? ybApplicationEnd : obApplicationEnd;
    // const applicationConfirmStartValue = group === 'YB' ? ybApplicationConfirmStart : obApplicationConfirmStart;
    // const applicationConfirmEndValue = group === 'YB' ? ybApplicationConfirmEnd : obApplicationConfirmEnd;
    const applicationPassConfirmStart = group === 'YB' ? ybApplicationPassConfirmStart : obApplicationPassConfirmStart;
    const applicationPassConfirmEnd = group === 'YB' ? ybApplicationPassConfirmEnd : obApplicationPassConfirmEnd;
    const finalPassConfirmStart = group === 'YB' ? ybFinalPassConfirmStart : obFinalPassConfirmStart;
    const finalPassConfirmEnd = group === 'YB' ? ybFinalPassConfirmEnd : obFinalPassConfirmEnd;
    const interviewStart = group === 'YB' ? ybInterviewStart : obInterviewStart;
    const interviewEnd = group === 'YB' ? ybInterviewEnd : obInterviewEnd;

    // const applicationStart = format(new Date(applicationStartValue), 'M월 dd일 (E) aaa HH시', { locale: ko });
    // const applicationEnd = format(new Date(applicationEndValue), 'M월 dd일 (E) aaa HH시', { locale: ko });
    // const applicationConfirmStart = format(new Date(applicationConfirmStartValue), 'M월 dd일 (E) aaa HH시', {
    //   locale: ko,
    // });
    // const applicationConfirmEnd = format(new Date(applicationConfirmEndValue), 'M월 dd일 (E) aaa HH시', {
    //   locale: ko,
    // });
    // const applicationPassConfirmStart = format(new Date(applicationPassConfirmStartValue), 'M월 dd일 (E)', {
    //   locale: ko,
    // });
    // const applicationPassConfirmEnd = format(new Date(applicationPassConfirmEndValue), 'M월 dd일 (E)', {
    //   locale: ko,
    // });
    // const finalPassConfirmStart = format(new Date(finalPassConfirmStartValue), 'M월 dd일 (E)', { locale: ko });
    // const finalPassConfirmEnd = format(new Date(finalPassConfirmEndValue), 'M월 dd일 (E)', { locale: ko });
    // const interviewStart = format(new Date(interviewStartValue), 'M월 dd일 (E)', { locale: ko });
    // const interviewEnd = format(new Date(interviewEndValue), 'M월 dd일 (E)', { locale: ko });

    handleSaveRecruitingInfo({
      season,
      group,
      applicationStart, // 서류 지원 시작
      applicationEnd, // 서류 지원 끝
      // applicationConfirmStart, // 서류 지원 확인 시작
      // applicationConfirmEnd, // 서류 지원 확인 종료
      applicationPassConfirmStart, // 서류 합격 확인 시작
      applicationPassConfirmEnd, // 서류 합격 확인 종료
      finalPassConfirmStart, // 최종 합격 확인 시작
      finalPassConfirmEnd, // 최종 합격 확인 종료
      interviewStart, // 면접 시작
      interviewEnd, // 면접 끝
    });
  }, [data, handleSaveRecruitingInfo]);

  if (isLoading) return <BigLoading />;

  const beforeRecruiting = isAfter(new Date(applicationStart || ''), new Date());
  const afterRecruiting = isBefore(new Date(finalPassConfirmEnd || ''), new Date());

  if (beforeRecruiting || afterRecruiting) return <>모집 기간이 아니에요.</>;

  return <>{isSignedIn ? <SignedInPage /> : <SignInPage />}</>;
};

export default MainPage;
