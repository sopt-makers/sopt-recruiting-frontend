import CoreValue from 'views/IntroducePage/components/CoreValue';
import Position from 'views/IntroducePage/components/Position';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  return (
    <div className={wrapper[deviceType]}>
      <RecruitmentTarget />
      <Position />
      <CoreValue />
    </div>
  );
};

export default IntroducePage;
