import { useContext, useEffect, useState } from 'react';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import BigLoading from 'views/loadings/BigLoding';
import MyPage from 'views/MyPage';
import useGetMyInfo from 'views/MyPage/hooks/useGetMyInfo';

const SignedInPage = () => {
  const [isComplete, setIsComplete] = useState(false);

  const { myInfoData, myInfoIsLoading } = useGetMyInfo();
  const { name, season, part, submit } = myInfoData?.data || {};

  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);

  const handleSetComplete = () => {
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
      {!isComplete && submit && <MyPage part={part} />}
      {!isComplete && !submit && <ApplyPage isReview={false} onSetComplete={handleSetComplete} />}
    </>
  );
};

export default SignedInPage;
