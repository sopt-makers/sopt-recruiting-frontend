import { useState } from 'react';

import ApplyPage from 'views/ApplyPage';
import CompletePage from 'views/CompletePage';
import BigLoading from 'views/loadings/BigLoding';
import MyPage from 'views/MyPage';

import useGetDraft from './hooks/useGetDraft';

const SignedInPage = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const { draftData, draftIsLoading } = useGetDraft();
  const { isSubmit } = draftData?.data || {};

  if (draftIsLoading) return <BigLoading />;

  return (
    <>
      {!isReview && isComplete && <CompletePage />}
      {!isReview && !isComplete && isSubmit && <MyPage onShowReview={() => setIsReview(true)} />}
      {(isReview || (!isComplete && !isSubmit)) && (
        <ApplyPage
          isComplete={isComplete}
          isReview={isReview}
          onSetComplete={() => setIsComplete(true)}
          draftData={draftData}
        />
      )}
    </>
  );
};

export default SignedInPage;
