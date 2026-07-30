import { track } from '@amplitude/analytics-browser';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PART_NAME_MAP } from 'views/PartDetailPage/constants/constant';
import { PartId } from 'views/PartDetailPage/types';
import PartHeader from 'views/PartDetailPage/components/PartHeader';
import PartIntroduction from 'views/PartDetailPage/components/PartIntroduction';
import GoodForYou from 'views/PartDetailPage/components/GoodForYou';
import LearningList from 'views/PartDetailPage/components/LearningList';
import Schedule from 'views/PartDetailPage/components/Schedule';
import Review from 'views/PartDetailPage/components/Review';
import useGetPartDetail from './hooks/useGetPartDetail';
import { wrapper } from './style.css';
import BigLoading from 'views/loadings/BigLoding';

const VALID_PART_IDS: PartId[] = ['Plan', 'Design', 'Android', 'iOS', 'Web', 'Server'];

const PartDetailPage = () => {
  const { partId } = useParams<{ partId: string }>();
  const isValidPartId = !!partId && VALID_PART_IDS.includes(partId as PartId);
  const { data: partContent, isPending } = useGetPartDetail(partId as PartId);
  const partName = isValidPartId ? PART_NAME_MAP[partId as PartId] : undefined;

  useEffect(() => {
    if (!partName) return;
    track('view_part_detail', { part_name: partName });
  }, [partName]);

  if (isPending) return <BigLoading />;
  if (!isValidPartId) {
    return <Navigate to="/introduce" replace />;
  }

  const validPartName = partName as string;

  return (
    <>
      <PartHeader partName={validPartName} />
      <div className={wrapper}>
        <PartIntroduction partName={validPartName} introduction={partContent?.introduction ?? ''} />
        <GoodForYou preferences={partContent?.preferences ?? []} />
        <LearningList partName={validPartName} partCurriculum={partContent?.partCurriculum ?? []} />
        <Schedule />
        <Review partId={partId as PartId} />
      </div>
    </>
  );
};

export default PartDetailPage;
