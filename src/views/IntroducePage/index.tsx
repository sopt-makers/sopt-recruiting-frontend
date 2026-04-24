import CoreValue from 'views/IntroducePage/components/CoreValue';
import FAQ from 'views/IntroducePage/components/FAQ';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import Schedule from 'views/IntroducePage/components/Schedule';
import Inquiry from 'views/IntroducePage/components/Inquiry';
import SoptPart from 'views/IntroducePage/components/SoptPart';
import ApplyHeader from 'views/IntroducePage/components/ApplyHeader';

const IntroducePage = () => {
  return (
    <div className={wrapper}>
      <ApplyHeader />
      <RecruitmentTarget />
      <SoptPart />
      <CoreValue />
      <Schedule />
      <FAQ />
      <Inquiry />
    </div>
  );
};

export default IntroducePage;
