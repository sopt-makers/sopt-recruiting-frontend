import { track } from '@amplitude/analytics-browser';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import BigLoading from 'views/loadings/BigLoding';

import useGetMyInfo from './hooks/useGetMyInfo';

const SignedInPage = () => {
  const [isComplete, setIsComplete] = useState(false);

  const { myInfoData, myInfoIsLoading } = useGetMyInfo();
  const { name, season, submit } = myInfoData?.data || {};

  const { handleSaveRecruitingInfo } = useRecruitingInfo();

  const handleSetComplete = () => {
    track('done-apply-confirm_submit');
    setIsComplete(true);
  };

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
      season,
    });
  }, [name, season, handleSaveRecruitingInfo]);

  if (myInfoIsLoading) return <BigLoading />;
  if (isComplete) return <CompletePage />;
  if (submit) return <Navigate to="/my" replace />;

  return <ApplyPage onSetComplete={handleSetComplete} />;
};

export default SignedInPage;
