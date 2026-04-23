import CoreValue from 'views/IntroducePage/components/CoreValue';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import Schedule from 'views/IntroducePage/components/Schedule';
import Inquiry from 'views/IntroducePage/components/Inquiry';
import SoptPart from 'views/IntroducePage/components/SoptPart';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  return (
    <div className={wrapper[deviceType]}>
      <RecruitmentTarget />
      <SoptPart />
      <CoreValue />
      <Schedule />
      <Inquiry />
    </div>
  );
};

export default IntroducePage;
