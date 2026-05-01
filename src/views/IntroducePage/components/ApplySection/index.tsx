import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { wrapper } from './style.css';
import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';
import RecruitingHeader from 'views/IntroducePage/components/ApplySection/components/RecruitingHeader/RecruitingHeader';
import NotificationHeader from 'views/IntroducePage/components/ApplySection/components/NotificationHeader/NotificationHeader';

// TODO : 서버 응답 교체되면 아래 코드로 변경
// interface Props {
//   headerImage: string;
// }

const ApplySection = () => {
  const { NoMoreRecruit, NoMoreApply } = useRecruitingSchedule();

  const deviceType = useDevice();

  return (
    <section className={wrapper}>
      {NoMoreRecruit || NoMoreApply ? <NotificationHeader /> : <RecruitingHeader />}
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
    </section>
  );
};

export default ApplySection;
