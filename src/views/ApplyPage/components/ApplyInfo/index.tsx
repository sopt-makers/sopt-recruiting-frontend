import Callout from '@components/Callout';

import { dateItems, dateLabel, dateText, dateWrapper, infoContainer, infoItems, infoWrapper } from './style.css';
import { APPLY_DATE, APPLY_INFO } from '../../constant';

const ApplyInfo = () => {
  return (
    <section className={infoContainer}>
      <ul className={infoWrapper}>
        {APPLY_INFO.map((info) => (
          <li key={info} className={infoItems}>
            &#183; {info}
          </li>
        ))}
      </ul>
      <Callout size="lg">{`마감 시간 이후에는 지원 제출을 받지 않습니다.
      제출하신 서류와 포트폴리오는 반환하지 않습니다.
      서버 오류를 대비해 지원서를 백업해 두시길 바랍니다.`}</Callout>
      <ol className={dateWrapper}>
        {APPLY_DATE.map(({ label, date }) => (
          <li key={label} className={dateItems}>
            <span className={dateLabel}>{label}</span>
            <span className={dateText}>{date}</span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ApplyInfo;
