import SectionTitle from '@components/SectionTitle';
import { DUMMY_SCHEDULE, TITLE } from 'views/IntroducePage/constants/constant';
import {
  gridWrapper,
  oddText,
  evenText,
  highlight,
  container,
  scheduleGroup,
  wrapper,
} from './style.css';

const Schedule = () => {
  return (
    <section className={wrapper}>
      <SectionTitle label={TITLE.SCHEDULE.label} title={TITLE.SCHEDULE.title} />
      <ScheduleBox />
    </section>
  );
};

export default Schedule;

const ScheduleBox = () => {
  const {
    group,
    applicationStartTime,
    applicationEndTime,
    interviewStartTime,
    interviewEndTime,
    finalResultTime,
    orientationTime,
  } = DUMMY_SCHEDULE;

  return (
    <div className={container}>
      <div className={gridWrapper}>
        <div className={scheduleGroup}>
          <p className={oddText}>{group} 서류 접수</p>
          <div className={evenText}>
            {`${applicationStartTime.date} `}
            <span className={highlight}>{applicationStartTime.hour}</span>
            {` ~ ${applicationEndTime.date} `}
            <span className={highlight}>{applicationEndTime.hour}</span>
          </div>
        </div>

        <div className={scheduleGroup}>
          <p className={oddText}>{group} 면접</p>
          <div className={evenText}>{`${interviewStartTime.date} ~ ${interviewEndTime.date}`}</div>
        </div>

        <div className={scheduleGroup}>
          <p className={oddText}>{group} 최종 결과 발표</p>
          <div className={evenText}>{`${finalResultTime.date} `}</div>
        </div>

        <div className={scheduleGroup}>
          <p className={oddText}>오리엔테이션</p>
          <div className={evenText}>{`${orientationTime.date} `}</div>
        </div>
      </div>
    </div>
  );
};
