import useDate from '@hooks/useDate';
import { wrapper } from './style.css';
import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';
import RecruitingHeader from 'views/IntroducePage/components/ApplySection/components/RecruitingHeader/RecruitingHeader';
import NotificationHeader from 'views/IntroducePage/components/ApplySection/components/NotificationHeader/NotificationHeader';

interface Props {
  headerImage: string;
}

const ApplySection = ({ headerImage }: Props) => {
  const { NoMoreRecruit, NoMoreApply } = useDate();

  const deviceType = useDevice();

  return (
    <section className={wrapper}>
      {NoMoreRecruit || NoMoreApply ? <NotificationHeader /> : <RecruitingHeader headerImage={headerImage} />}
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
    </section>
  );
};

export default ApplySection;
