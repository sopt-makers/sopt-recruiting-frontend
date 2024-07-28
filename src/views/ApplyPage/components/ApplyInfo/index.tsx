import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { memo, useContext } from 'react';

import Callout from '@components/Callout';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import {
  dateItems,
  dateLabel,
  dateText,
  dateWrapper,
  infoContainer,
  infoItems,
  infoItemsBold,
  infoWrapper,
} from './style.css';
import { APPLY_INFO } from '../../constant';

const ApplyInfo = memo(({ isReview }: { isReview: boolean }) => {
  const {
    recruitingInfo: {
      applicationStart,
      applicationEnd,
      applicationPassConfirmStart,
      interviewStart,
      interviewEnd,
      finalPassConfirmStart,
    },
  } = useContext(RecruitingInfoContext);

  if (!applicationStart) return;

  const formattedApplicationStart = format(new Date(applicationStart || ''), 'M월 dd일 (E) aaa HH시', { locale: ko });
  const formattedApplicationEnd = format(new Date(applicationEnd || ''), 'M월 dd일 (E) aaa HH시', { locale: ko });
  const formattedApplicationConfirmStart = format(
    new Date(applicationPassConfirmStart || ''),
    'M월 dd일 (E) aaa HH시',
    {
      locale: ko,
    },
  );
  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M월 dd일 (E)', { locale: ko });
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M월 dd일 (E)', { locale: ko });
  const formattedFinalPassConfirmStart = format(new Date(finalPassConfirmStart || ''), 'M월 dd일 (E)', { locale: ko });

  return (
    <section className={infoContainer}>
      {!isReview && (
        <ul className={infoWrapper}>
          <span key="first-info" className={infoItems}>
            &#183; 지원서 작성 전에{' '}
            <a
              href="https://makers.sopt.org/recruit"
              className={infoItemsBold}
              target="_blank"
              rel="noreferrer noopener">
              모집 및 활동 일정
            </a>
            을 꼭 숙지하고 지원해 주시기 바랍니다.
          </span>
          {APPLY_INFO.sections.map(({ id, content }) => (
            <li key={id}>
              &#183;{' '}
              {content.map(({ text, weight }) => (
                <span key={text} className={weight === 'normal' ? infoItems : infoItemsBold}>
                  {text}
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
      <Callout size="lg">
        {!isReview
          ? `마감 시간 이후에는 지원 제출을 받지 않습니다.
      제출하신 서류와 포트폴리오는 반환하지 않습니다.
      서버 오류를 대비해 지원서를 백업해 두시길 바랍니다.`
          : '지원서 제출 이후 어떠한 경우에도 수정은 불가합니다.'}
      </Callout>
      {!isReview && (
        <ol className={dateWrapper}>
          <li className={dateItems}>
            <span className={dateLabel}>지원 기간</span>
            <span className={dateText}>{`${formattedApplicationStart} - ${formattedApplicationEnd}`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabel}>서류 발표</span>
            <span className={dateText}>{formattedApplicationConfirmStart}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabel}>면접 평가</span>
            <span className={dateText}>{`${formattedInterviewStart} - ${formattedInterviewEnd} (오프라인 면접)`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabel}>최종 발표</span>
            <span className={dateText}>{formattedFinalPassConfirmStart}</span>
          </li>
        </ol>
      )}
    </section>
  );
});

ApplyInfo.displayName = 'ApplyInfo';

export default ApplyInfo;
