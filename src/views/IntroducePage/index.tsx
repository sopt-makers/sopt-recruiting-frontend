import CoreValue from 'views/IntroducePage/components/CoreValue';
import FAQ from 'views/IntroducePage/components/FAQ';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import SoptPart from 'views/IntroducePage/components/SoptPart';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  return (
    <div className={wrapper[deviceType]}>
      <RecruitmentTarget />
      <SoptPart />
      <CoreValue />
      <FAQ />
    </div>
  );
};

export default IntroducePage;
