import SectionTitle from '@components/SectionTitle';
import { TITLE } from 'views/IntroducePage/constants/constant';
import { gridWrapper, oddText, evenText, highlight, container, scheduleGroup, wrapper } from './style.css';
import useDate from '@hooks/useDate';
import { format } from '@utils/dateFormatter';

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
  const { group, applicationStart, applicationEnd, interviewStart, interviewEnd, finalResultStart } = useDate();

  const formattedApplicationStart = applicationStart ? format(applicationStart, 'M월 dd일 aaa hh시') : '';
  const formattedApplicationStartHour = applicationStart ? format(applicationStart, 'aaa hh시') : '';
  const formattedApplicationEnd = applicationEnd ? format(applicationEnd, 'M월 dd일 aaa hh시') : '';
  const formattedApplicationEndHour = applicationEnd ? format(applicationEnd, 'aaa hh시') : '';
  const formattedInterviewStart = interviewStart ? format(interviewStart, 'M월 dd일') : '';
  const formattedInterviewEnd = interviewEnd ? format(interviewEnd, 'M월 dd일') : '';
  const formattedFinalResultStart = finalResultStart ? format(finalResultStart, 'M월 dd일') : '';

  return (
    <div className={container}>
      <div className={gridWrapper}>
        <div className={scheduleGroup}>
          <p className={oddText}>{group} 서류 접수</p>
          <div className={evenText}>
            {`${formattedApplicationStart} `}
            <span className={highlight}>{formattedApplicationStartHour}</span>
            {` ~ ${formattedApplicationEnd} `}
            <span className={highlight}>{formattedApplicationEndHour}</span>
          </div>
        </div>

        <div className={scheduleGroup}>
          <p className={oddText}>{group} 면접</p>
          <div className={evenText}>{`${formattedInterviewStart} ~ ${formattedInterviewEnd}`}</div>
        </div>

        <div className={scheduleGroup}>
          <p className={oddText}>{group} 최종 결과 발표</p>
          <div className={evenText}>{formattedFinalResultStart}</div>
        </div>

        {/* TODO: 오리엔테이션 날짜 어드민에서 가져오기 */}
        <div className={scheduleGroup}>
          <p className={oddText}>오리엔테이션</p>
          <div className={evenText}>{'3월 27일'}</div>
        </div>
      </div>
    </div>
  );
};
