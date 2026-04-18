import CoreValue from 'views/IntroducePage/components/CoreValue';
import Position from 'views/IntroducePage/components/Position';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import Schedule from 'views/IntroducePage/components/Schedule';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  return (
    <div className={wrapper[deviceType]}>
      <RecruitmentTarget />
      <Position />
      <CoreValue />
      <Schedule />
    </div>
  );
};

export default IntroducePage;
