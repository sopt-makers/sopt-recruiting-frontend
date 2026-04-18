import SectionTitle from '@components/SectionTitle';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { DUMMY_SCHEDULE, TITLE } from 'views/IntroducePage/constants/constant';
import {
  gridWrapperVar,
  oddTextVar,
  evenTextVar,
  highlightVar,
  containerVar,
  scheduleGroupVar,
  wrapperVar,
} from './style.css';

const Schedule = () => {
  const { deviceType } = useDeviceType();

  return (
    <section className={wrapperVar[deviceType]}>
      <SectionTitle label={TITLE.SCHEDULE.label} title={TITLE.SCHEDULE.title} />
      <ScheduleBox />
    </section>
  );
};

export default Schedule;

const ScheduleBox = () => {
  const { deviceType } = useDeviceType();
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
    <div className={containerVar[deviceType]}>
      <div className={gridWrapperVar[deviceType]}>
        <div className={scheduleGroupVar[deviceType]}>
          <p className={oddTextVar[deviceType]}>{group} 서류 접수</p>
          <div className={evenTextVar[deviceType]}>
            {`${applicationStartTime.date} `}
            <span className={highlightVar[deviceType]}>{applicationStartTime.hour}</span>
            {` ~ ${applicationEndTime.date} `}
            <span className={highlightVar[deviceType]}>{applicationEndTime.hour}</span>
          </div>
        </div>

        <div className={scheduleGroupVar[deviceType]}>
          <p className={oddTextVar[deviceType]}>{group} 면접</p>
          <div className={evenTextVar[deviceType]}>{`${interviewStartTime.date} ~ ${interviewEndTime.date}`}</div>
        </div>

        <div className={scheduleGroupVar[deviceType]}>
          <p className={oddTextVar[deviceType]}>{group} 최종 결과 발표</p>
          <div className={evenTextVar[deviceType]}>{`${finalResultTime.date} `}</div>
        </div>

        <div className={scheduleGroupVar[deviceType]}>
          <p className={oddTextVar[deviceType]}>오리엔테이션</p>
          <div className={evenTextVar[deviceType]}>{`${orientationTime.date} `}</div>
        </div>
      </div>
    </div>
  );
};
