import { useEffect } from 'react';

import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import useGetRecruitingInfo from './useGetRecruitingInfo';
import { isAfter, isBefore } from '@utils/dateFormatter';

const useDate = () => {
  const { handleSaveRecruitingInfo } = useRecruitingInfo();

  const { data, isLoading } = useGetRecruitingInfo();

  const {
    name,
    season,
    group,
    applicationStart,
    applicationEnd,
    applicationResultStart,
    applicationResultEnd,
    finalResultStart,
    finalResultEnd,
    interviewStart,
    interviewEnd,
  } = data?.season || {};

  const beforeRecruiting = isAfter(new Date(applicationStart || ''), new Date());
  const afterRecruiting = isBefore(new Date(finalResultEnd || ''), new Date());
  const afterApply = isBefore(new Date(applicationEnd || ''), new Date());
  const beforeScreeningResult = isAfter(new Date(applicationResultStart || ''), new Date());
  const afterScreeningResult = isBefore(new Date(applicationResultEnd || ''), new Date());
  const afterInterview = isBefore(new Date(interviewEnd || ''), new Date());
  const beforeFinalResult = isAfter(new Date(finalResultStart || ''), new Date());

  const NoMoreRecruit = beforeRecruiting || afterRecruiting; // 지원 전
  const NoMoreApply = beforeRecruiting || afterApply; // 서류 지원 마감
  const NoMoreScreeningResult = beforeScreeningResult || afterScreeningResult; // 서류 합불 확인 기간 아님
  const NoMoreReview = afterInterview; // 면접 마감 -> 지원서 확인 불가
  const NoMoreFinalResult = beforeFinalResult || afterRecruiting; // 최종 합불 확인 기간 아님

  useEffect(() => {
    handleSaveRecruitingInfo({
      soptName: name,
      season,
      group,
      applicationStart, // 서류 지원 시작
      applicationEnd, // 서류 지원 끝
      applicationResultStart, // 서류 합격 확인 시작
      applicationResultEnd, // 서류 합격 확인 종료
      finalResultStart, // 최종 합격 확인 시작
      finalResultEnd, // 최종 합격 확인 종료
      interviewStart, // 면접 시작
      interviewEnd, // 면접 끝
    });
  }, [
    name,
    season,
    group,
    applicationStart,
    applicationEnd,
    applicationResultStart,
    applicationResultEnd,
    finalResultStart,
    finalResultEnd,
    interviewStart,
    interviewEnd,
    handleSaveRecruitingInfo,
  ]);

  return {
    ...data?.season,
    NoMoreRecruit,
    NoMoreApply,
    NoMoreScreeningResult,
    NoMoreReview,
    NoMoreFinalResult,
    isLoading,
  };
};

export default useDate;
