import { isAfter, isBefore } from 'date-fns';
import { useContext, useEffect } from 'react';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import useGetRecruitingInfo from './useGetRecruitingInfo';

const useDate = () => {
  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);

  const { data, isLoading } = useGetRecruitingInfo();

  const {
    name,
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
  } = data?.data.season || {};

  const applicationStart = group === 'YB' ? ybApplicationStart : obApplicationStart; // 서류 시작
  const applicationEnd = group === 'YB' ? ybApplicationEnd : obApplicationEnd; // 서류 마감
  // const applicationConfirmStartValue = group === 'YB' ? ybApplicationConfirmStart : obApplicationConfirmStart; // 서류 검사 시작
  // const applicationConfirmEndValue = group === 'YB' ? ybApplicationConfirmEnd : obApplicationConfirmEnd; // 서류 검사 마감
  const applicationPassConfirmStart = group === 'YB' ? ybApplicationPassConfirmStart : obApplicationPassConfirmStart; // 서류 합격 시작
  const applicationPassConfirmEnd = group === 'YB' ? ybApplicationPassConfirmEnd : obApplicationPassConfirmEnd; // 서류 합격 마감
  const interviewStart = group === 'YB' ? ybInterviewStart : obInterviewStart;
  const interviewEnd = group === 'YB' ? ybInterviewEnd : obInterviewEnd;
  const finalPassConfirmStart = group === 'YB' ? ybFinalPassConfirmStart : obFinalPassConfirmStart; // 최종 합격 시작
  const finalPassConfirmEnd = group === 'YB' ? ybFinalPassConfirmEnd : obFinalPassConfirmEnd; // 최종 합격 마감

  const beforeRecruiting = isAfter(new Date(applicationStart || ''), new Date());
  const afterRecruiting = isBefore(new Date(finalPassConfirmEnd || ''), new Date());
  const afterApply = isBefore(new Date(applicationEnd || ''), new Date());
  const beforeScreeningResult = isAfter(new Date(applicationPassConfirmStart || ''), new Date());
  const afterScreeningResult = isBefore(new Date(applicationPassConfirmEnd || ''), new Date());
  const afterInterview = isBefore(new Date(interviewEnd || ''), new Date());
  const beforeFinalResult = isAfter(new Date(finalPassConfirmStart || ''), new Date());

  const NoMoreRecruit = beforeRecruiting || afterRecruiting; // 지원 전
  const NoMoreApply = beforeRecruiting || afterApply; // 서류 지원 마감
  const NoMoreScreeningResult = beforeScreeningResult || afterScreeningResult; // 서류 합불 확인 기간 아님
  const NoMoreReview = afterInterview; // 면접 마감 -> 지원서 확인 불가
  const NoMoreFinalResult = beforeFinalResult || afterRecruiting; // 최종 합불 확인 기간 아님

  const isMakers = name?.toLowerCase().includes('makers');

  useEffect(() => {
    handleSaveRecruitingInfo({
      soptName: name,
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
  }, [
    name,
    season,
    group,
    applicationStart,
    applicationEnd,
    applicationPassConfirmStart,
    applicationPassConfirmEnd,
    finalPassConfirmStart,
    finalPassConfirmEnd,
    interviewStart,
    interviewEnd,
    handleSaveRecruitingInfo,
  ]);

  return {
    ...data?.data.season,
    NoMoreRecruit,
    NoMoreApply,
    NoMoreScreeningResult,
    NoMoreReview,
    NoMoreFinalResult,
    isLoading,
    isMakers,
  };
};

export default useDate;
