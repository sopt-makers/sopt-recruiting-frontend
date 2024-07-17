import { useContext } from 'react';

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

const ApplyInfo = () => {
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

  return (
    <section className={infoContainer}>
      <ul className={infoWrapper}>
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
      <Callout size="lg">{`마감 시간 이후에는 지원 제출을 받지 않습니다.
      제출하신 서류와 포트폴리오는 반환하지 않습니다.
      서버 오류를 대비해 지원서를 백업해 두시길 바랍니다.`}</Callout>
      <ol className={dateWrapper}>
        <li className={dateItems}>
          <span className={dateLabel}>지원 기간</span>
          <span className={dateText}>{`${applicationStart} - ${applicationEnd}`}</span>
        </li>
        <li className={dateItems}>
          <span className={dateLabel}>서류 발표</span>
          <span className={dateText}>{applicationPassConfirmStart}</span>
        </li>
        <li className={dateItems}>
          <span className={dateLabel}>면접 평가</span>
          <span className={dateText}>{`${interviewStart} - ${interviewEnd} (오프라인 면접)`}</span>
        </li>
        <li className={dateItems}>
          <span className={dateLabel}>최종 발표</span>
          <span className={dateText}>{finalPassConfirmStart}</span>
        </li>
      </ol>
    </section>
  );
};

export default ApplyInfo;
