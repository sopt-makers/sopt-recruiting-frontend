import CoreValue from 'views/IntroducePage/components/CoreValue';
import FAQ from 'views/IntroducePage/components/FAQ';
import RecruitmentTarget from 'views/IntroducePage/components/RecruitmentTarget';
import { divider, wrapper } from './style.css';
import Schedule from 'views/IntroducePage/components/Schedule';
import Inquiry from 'views/IntroducePage/components/Inquiry';
import SoptPart from 'views/IntroducePage/components/SoptPart';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import BottomApplyCTA from 'views/IntroducePage/components/BottomApplyCTA';
import ApplySection from 'views/IntroducePage/components/ApplySection';
import Footer from '@components/Layout/components/Footer';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import useRecruitInfo from 'views/IntroducePage/hooks/useRecruitInfo';
import BigLoading from 'views/loadings/BigLoding';
import { Navigate } from 'react-router-dom';

const IntroducePage = () => {
  const { deviceType } = useDeviceType();

  const { NoMoreRecruit, NoMoreApply } = useRecruitingSchedule();
  const { data: recruitData, isPending, isLoading } = useRecruitInfo();

  if (isPending || isLoading) return <BigLoading />;
  if (!recruitData) return <Navigate to="/error" replace />;

  return (
    <>
      <div className={wrapper}>
        {/* TODO : 서버 응답 교체되면 Props 추가 */}
        <ApplySection />
        <RecruitmentTarget />
        <SoptPart parts={recruitData.partIntroduction} />
        <CoreValue values={recruitData.coreValue} />
        <Schedule />
        <FAQ faqData={recruitData.recruitQuestion} />
        {!NoMoreRecruit && !NoMoreApply && <BottomApplyCTA />}
        {deviceType !== 'DESK' && <hr className={divider} />}
        <Inquiry />
      </div>
      <Footer />
    </>
  );
};

export default IntroducePage;
