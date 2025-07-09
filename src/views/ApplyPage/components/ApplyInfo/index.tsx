import { memo } from 'react';

import Callout from '@components/Callout';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

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
import { format, subMinutes } from '@utils/dateFormatter';

const ApplyInfo = memo(({ isReview = false }: { isReview?: boolean }) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: {
      applicationStart,
      applicationEnd,
      applicationResultStart,
      interviewStart,
      interviewEnd,
      finalResultStart,
    },  
  } = useRecruitingInfo();

  if (!applicationStart) return;

  const formattedApplicationStart = format(new Date(applicationStart || ''), 'M월 dd일 (E) aaa HH시 mm분');
  const formattedApplicationEnd = format(subMinutes(new Date(applicationEnd || ''), 1), 'M월 dd일 (E) aaa HH시 mm분');
  const formattedApplicationConfirmStart = format(
    new Date(applicationResultStart || ''),
    'M월 dd일 (E) aaa HH시 mm분',
  );
  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M월 dd일 (E)');
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M월 dd일 (E)');
  const formattedResultStart = format(new Date(finalResultStart || ''), 'M월 dd일 (E)');

  return (
    <section className={infoContainerVar[deviceType]}>
      {!isReview && (
        <ul className={infoWrapperVar[deviceType]}>
          <li key="first-info" className={infoItemsVar[deviceType]}>
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
            <li key={id} className={infoItemsVar[deviceType]}>
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
            <span className={dateLabelVar[deviceType]}>지원 기간</span>
            <span
              className={
                dateTextVar[deviceType]
              }>{`${formattedApplicationStart} ${deviceType !== 'DESK' ? '\n' : ''}- ${formattedApplicationEnd}`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[deviceType]}>서류 발표</span>
            <span className={dateTextVar[deviceType]}>{formattedApplicationConfirmStart}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[deviceType]}>면접 평가</span>
            <span className={dateTextVar[deviceType]}>{`${formattedInterviewStart} - ${formattedInterviewEnd}`}</span>
          </li>
          <li className={dateItems}>
            <span className={dateLabelVar[deviceType]}>최종 발표</span>
            <span className={dateTextVar[deviceType]}>{formattedResultStart}</span>
          </li>
        </ol>
      )}
    </section>
  );
});

ApplyInfo.displayName = 'ApplyInfo';

export default ApplyInfo;
