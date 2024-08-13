import { format, subMinutes } from 'date-fns';
import { ko } from 'date-fns/locale';
import { memo, useContext } from 'react';

import Callout from '@components/Callout';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import {
  dateItems,
  dateLabelVar,
  dateTextVar,
  dateWrapper,
  infoContainerVar,
  infoItemsBold,
  infoItemsVar,
  infoWrapperVar,
} from './style.css';
import { APPLY_INFO } from '../../constant';

const ApplyInfo = memo(({ isReview }: { isReview: boolean }) => {
  const DEVICE_TYPE = useDevice();
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

  const formattedApplicationStart = format(new Date(applicationStart || ''), 'M월 dd일 (E) aaa HH시 mm분', {
    locale: ko,
  });
  const formattedApplicationEnd = format(subMinutes(new Date(applicationEnd || ''), 1), 'M월 dd일 (E) aaa HH시 mm분', {
    locale: ko,
  });
  const formattedApplicationConfirmStart = format(
    new Date(applicationPassConfirmStart || ''),
    'M월 dd일 (E) aaa HH시 mm분',
    {
      locale: ko,
    },
  );
  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M월 dd일 (E)', { locale: ko });
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M월 dd일 (E)', { locale: ko });
  const formattedFinalPassConfirmStart = format(new Date(finalPassConfirmStart || ''), 'M월 dd일 (E)', { locale: ko });

  return (
    <section className={infoContainerVar[DEVICE_TYPE]}>
      {!isReview && (
        <ul className={infoWrapperVar[DEVICE_TYPE]}>
          <li key="first-info" className={infoItemsVar[DEVICE_TYPE]}>
            지원서 작성 전에{` `}
            <a
              href="https://makers.sopt.org/recruit"
              className={infoItemsBold}
              target="_blank"
              rel="noreferrer noopener">
              모집 및 활동 일정
            </a>
            을 꼭 숙지하고 지원해 주시기 바랍니다.
          </li>
          {APPLY_INFO.sections.map(({ id, content }) => (
            <li key={id} className={infoItemsVar[DEVICE_TYPE]}>
              {content.map(({ text, weight }) => (
                <span key={text} className={weight === 'strong' ? infoItemsBold : ''}>
                  {text}
                </span>
              ))}
            </li>
          ))}
        </ul>
      )}
      <Callout size="lg">
        {!isReview
          ? `마감 시간 이후에는 지원 제출을 받지 않습니다.\n제출하신 서류와 포트폴리오는 반환하지 않습니다.\n서버 오류를 대비해 지원서를 백업해 두시길 바랍니다.`
          : '지원서 제출 이후 어떠한 경우에도 수정은 불가합니다.'}
      </Callout>
      {!isReview && (
        <ol className={dateWrapper}>
          <li className={dateItems}>
            <span className={dateLabelVar[DEVICE_TYPE]}>지원 기간</span>
            <span
              className={
                dateTextVar[DEVICE_TYPE]
              }>{`${formattedApplicationStart} ${DEVICE_TYPE !== 'DESK' ? '\n' : ''}- ${formattedApplicationEnd}`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[DEVICE_TYPE]}>서류 발표</span>
            <span className={dateTextVar[DEVICE_TYPE]}>{formattedApplicationConfirmStart}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[DEVICE_TYPE]}>면접 평가</span>
            <span className={dateTextVar[DEVICE_TYPE]}>{`${formattedInterviewStart} - ${formattedInterviewEnd}`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[DEVICE_TYPE]}>최종 발표</span>
            <span className={dateTextVar[DEVICE_TYPE]}>{formattedFinalPassConfirmStart}</span>
          </li>
        </ol>
      )}
    </section>
  );
});

ApplyInfo.displayName = 'ApplyInfo';

export default ApplyInfo;
