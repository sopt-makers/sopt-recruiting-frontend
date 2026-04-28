import CoreValue from 'views/IntroducePage/components/CoreValue';
import FAQ from 'views/IntroducePage/components/FAQ';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { divider, wrapper } from './style.css';
import Schedule from 'views/IntroducePage/components/Schedule';
import Inquiry from 'views/IntroducePage/components/Inquiry';
import SoptPart from 'views/IntroducePage/components/SoptPart';
import useDate from '@hooks/useDate';
import BottomApplyCTA from 'views/IntroducePage/components/BottomApplyCTA';
import ApplySection from 'views/IntroducePage/components/ApplySection';
import Footer from '@components/Layout/components/Footer';
import { useDeviceType } from 'contexts/DeviceTypeProvider';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  const { NoMoreRecruit, NoMoreApply } = useDate();

  return (
    <>
      <div className={wrapper}>
        <ApplySection />
        <RecruitmentTarget />
        <SoptPart />
        <CoreValue />
        <Schedule />
        <FAQ />
        {!NoMoreRecruit && !NoMoreApply && <BottomApplyCTA />}
        {deviceType !== 'DESK' && <hr className={divider} />}
        <Inquiry />
      </div>
      <Footer />
    </>
  );
};

export default IntroducePage;
