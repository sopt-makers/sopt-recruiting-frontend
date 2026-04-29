import { useParams, Navigate } from 'react-router-dom';
import { PART_DETAIL } from 'views/PartDetailPage/constants/constant';
import { PartId } from 'views/PartDetailPage/types';
import PartHeader from 'views/PartDetailPage/components/PartHeader';
import PartIntroduction from 'views/PartDetailPage/components/PartIntroduction';
import GoodForYou from 'views/PartDetailPage/components/GoodForYou';
import LearningList from 'views/PartDetailPage/components/LearningList';
import Schedule from 'views/PartDetailPage/components/Schedule';
import Review from 'views/PartDetailPage/components/Review';
import useGetPartDetail from './hooks/useGetPartDetail';
import { wrapper, divider } from './style.css';
import BigLoading from 'views/loadings/BigLoding';

const VALID_PART_IDS: PartId[] = ['Plan', 'Design', 'Android', 'iOS', 'Web', 'Server'];

const PartDetailPage = () => {
  const { partId } = useParams<{ partId: string }>();
  const isValidPartId = !!partId && VALID_PART_IDS.includes(partId as PartId);
  const { data: partContent, isPending } = useGetPartDetail(partId as PartId);

  if (isPending) return <BigLoading />;
  if (!isValidPartId) {
    return <Navigate to="/introduce" replace />;
  }

  const { partName } = PART_DETAIL[partId as PartId];

  return (
    <div className={wrapper}>
      <PartHeader partName={partName} />
      <div className={divider} />
      <PartIntroduction partName={partName} introduction={partContent?.introduction ?? ''} />
      <GoodForYou preferences={partContent?.preferences ?? []} />
      <LearningList partName={partName} partCurriculum={partContent?.partCurriculum ?? []} />
      <Schedule />
      <Review partId={partId as PartId} />
    </div>
  );
};

export default PartDetailPage;
