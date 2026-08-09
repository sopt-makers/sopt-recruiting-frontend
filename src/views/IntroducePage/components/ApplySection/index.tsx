import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { wrapper } from './style.css';
import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';
import RecruitingHeader from 'views/IntroducePage/components/ApplySection/components/RecruitingHeader/RecruitingHeader';
import NotificationHeader from 'views/IntroducePage/components/ApplySection/components/NotificationHeader/NotificationHeader';
import BigLoading from 'views/loadings/BigLoding';

interface Props {
  headerImage: string;
}

const ApplySection = ({ headerImage }: Props) => {
  const { NoMoreRecruit, NoMoreApply, isLoading } = useRecruitingSchedule();

  const deviceType = useDevice();

  if (isLoading) return <BigLoading />;

  return (
    <section className={wrapper}>
      {NoMoreRecruit || NoMoreApply ? <NotificationHeader /> : <RecruitingHeader headerImage={headerImage} />}
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
    </section>
  );
};

export default ApplySection;
