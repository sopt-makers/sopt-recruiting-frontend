import { lazy } from 'react';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import useDialog from '@hooks/useDialog';
import BigLoading from 'views/loadings/BigLoding';
import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';
import SignInBlockedDialog from 'views/dialogs/SignInBlockedDialog';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignInPage = () => {
  const { isLoading, NoMoreRecruit } = useRecruitingSchedule();
  const { ref: signInBlockedDialogRef, handleShowDialog: handleShowSignInBlockedDialog } = useDialog();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar}>
      <SignInInfo />
      <SignInForm onSignInBlocked={handleShowSignInBlockedDialog} />
      <SignInBlockedDialog ref={signInBlockedDialogRef} />
    </div>
  );
};

export default SignInPage;
