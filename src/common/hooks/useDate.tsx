import { isAfter, isBefore } from 'date-fns';

import useGetRecruitingInfo from './useGetRecruitingInfo';

const useDate = () => {
  const { data, isLoading } = useGetRecruitingInfo();

  const {
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
    // ybInterviewEnd,
    // obInterviewEnd,
  } = data?.data.season || {};

  const applicationStart = group === 'YB' ? ybApplicationStart : obApplicationStart; // 서류 시작
  const applicationEnd = group === 'YB' ? ybApplicationEnd : obApplicationEnd; // 서류 마감
  // const applicationConfirmStartValue = group === 'YB' ? ybApplicationConfirmStart : obApplicationConfirmStart; // 서류 검사 시작
  // const applicationConfirmEndValue = group === 'YB' ? ybApplicationConfirmEnd : obApplicationConfirmEnd; // 서류 검사 마감
  const applicationPassConfirmStart = group === 'YB' ? ybApplicationPassConfirmStart : obApplicationPassConfirmStart; // 서류 합격 시작
  const applicationPassConfirmEnd = group === 'YB' ? ybApplicationPassConfirmEnd : obApplicationPassConfirmEnd; // 서류 합격 마감
  const interviewStart = group === 'YB' ? ybInterviewStart : obInterviewStart; // 면접 시작
  // const interviewEnd = group === 'YB' ? ybInterviewEnd : obInterviewEnd; // 면접 마감
  const finalPassConfirmStart = group === 'YB' ? ybFinalPassConfirmStart : obFinalPassConfirmStart; // 최종 합격 시작
  const finalPassConfirmEnd = group === 'YB' ? ybFinalPassConfirmEnd : obFinalPassConfirmEnd; // 최종 합격 마감

  // 서류 전 / 서류 중간 / 서류 마감 / 합격 기다리는 중 / 서류 합격 시작 / 서률 합격 중 / 서류 합격 마감 / 기다리는 중 / 면접 시작 / 면접 마감 / 기다리는 중 / 최종 합격 / 최종 합격 마감
  const beforeRecruiting = isAfter(new Date(applicationStart || ''), new Date());
  const afterRecruiting = isBefore(new Date(finalPassConfirmEnd || ''), new Date());
  const afterApply = isBefore(new Date(applicationEnd || ''), new Date());
  const beforeScreeningResult = isAfter(new Date(applicationPassConfirmStart || ''), new Date());
  const afterScreeningResult = isBefore(new Date(applicationPassConfirmEnd || ''), new Date());
  const startInterview = isBefore(new Date(interviewStart || ''), new Date());
  const beforeFinalResult = isAfter(new Date(finalPassConfirmStart || ''), new Date());

  const NoMoreRecruit = beforeRecruiting || afterRecruiting; // 지원 전
  const NoMoreApply = beforeRecruiting || afterApply; // 서류 지원 마감
  const NoMoreScreeningResult = beforeScreeningResult || afterScreeningResult; // 서류 합불 확인 기간 아님
  const NoMoreReview = startInterview; // 면접 시작 -> 지원서 확인 불가
  const NoMoreFinalResult = beforeFinalResult || afterRecruiting; // 최종 합불 확인 기간 아님

  return { NoMoreRecruit, NoMoreApply, NoMoreScreeningResult, NoMoreReview, NoMoreFinalResult, isLoading };
};

export default useDate;
