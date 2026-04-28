import CoreValue from 'views/IntroducePage/components/CoreValue';
import FAQ from 'views/IntroducePage/components/FAQ';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { wrapper } from './style.css';
import Schedule from 'views/IntroducePage/components/Schedule';
import Inquiry from 'views/IntroducePage/components/Inquiry';
import SoptPart from 'views/IntroducePage/components/SoptPart';
import useDate from '@hooks/useDate';
import BottomApplyCTA from 'views/IntroducePage/components/BottomApplyCTA';
import ApplySection from 'views/IntroducePage/components/ApplySection';
import useGetRecruitInfo from 'views/IntroducePage/hooks/useGetRecruitInfo';

const IntroducePage = () => {
  const { NoMoreRecruit, NoMoreApply } = useDate();
  const { recruitData } = useGetRecruitInfo();

  if (!recruitData) return null;

  return (
    <div className={wrapper}>
      <ApplySection />
      <RecruitmentTarget />
      <SoptPart parts={recruitData.partIntroduction} />
      <CoreValue values={recruitData.coreValue} />
      <Schedule />
      <FAQ faqData={recruitData.recruitQuestion} />
      {!NoMoreRecruit && !NoMoreApply && <BottomApplyCTA />}
      <Inquiry />
    </div>
  );
};

export default IntroducePage;
