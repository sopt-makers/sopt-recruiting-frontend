import useDate from '@hooks/useDate';
import { wrapper } from './style.css';
import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';
import RecruitingHeader from 'views/IntroducePage/components/ApplyHeader/components/RecruitingHeader/RecruitingHeader';
import NotificationHeader from 'views/IntroducePage/components/ApplyHeader/components/NotificationHeader/NotificationHeader';

const ApplyHeader = () => {
  const { NoMoreRecruit, NoMoreApply } = useDate();

  const deviceType = useDevice();

  return (
    <div className={wrapper}>
      {NoMoreRecruit || NoMoreApply ? <NotificationHeader /> : <RecruitingHeader />}
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
    </div>
  );
};

export default ApplyHeader;
