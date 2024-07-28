import { track } from '@amplitude/analytics-browser';
import { useContext, useEffect, useState } from 'react';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import BigLoading from 'views/loadings/BigLoding';
import MyPage from 'views/MyPage';

import useGetDraft from './hooks/useGetDraft';

const SignedInPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const { draftData, draftIsLoading } = useGetDraft();
  const { applicant, isSubmit } = draftData?.data || {};

  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);

  const handleShowReview = () => {
    track('click-my-review');
    setIsReview(true);
  };

  const handleSetComplete = () => {
    setIsComplete(true);
  };

  useEffect(() => {
    handleSaveRecruitingInfo({
      name: applicant?.name,
    });
  }, [applicant, handleSaveRecruitingInfo]);

  if (draftIsLoading) return <BigLoading />;

  return (
    <>
      {!isReview && isComplete && <CompletePage />}
      {!isReview && !isComplete && isSubmit && <MyPage onShowReview={handleShowReview} />}
      {(isReview || (!isComplete && !isSubmit)) && (
        <ApplyPage isReview={isReview} onSetComplete={handleSetComplete} draftData={draftData} />
      )}
    </>
  );
};

export default SignedInPage;
