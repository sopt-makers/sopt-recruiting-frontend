import { track } from '@amplitude/analytics-browser';
import { useEffect, useState } from 'react';

import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import BigLoading from 'views/loadings/BigLoding';
import MyPage from 'views/MyPage';

import useGetMyInfo from './hooks/useGetMyInfo';

const SignedInPage = () => {
  const [isComplete, setIsComplete] = useState(false);

  const { myInfoData, myInfoIsLoading } = useGetMyInfo();
  const { name, season, part, submit, applicationPass } = myInfoData?.data || {};

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

  return (
    <>
      {isComplete && <CompletePage />}
      {!isComplete && submit && <MyPage part={part} applicationPass={applicationPass} />}
      {!isComplete && !submit && <ApplyPage onSetComplete={handleSetComplete} />}
    </>
  );
};

export default SignedInPage;
