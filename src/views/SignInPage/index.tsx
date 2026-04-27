import { lazy } from 'react';

import useDate from '@hooks/useDate';
import useDialog from '@hooks/useDialog';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';
import SignInBlockedDialog from 'views/dialogs/SignInBlockedDialog';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignInPage = () => {
  const { deviceType } = useDeviceType();
  const { isLoading, NoMoreRecruit } = useDate();
  const { ref: loginBlockedDialogRef, handleShowDialog: handleShowLoginBlockedDialog } = useDialog();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <SignInInfo />
      <SignInForm onLoginBlocked={handleShowLoginBlockedDialog} />
      <SignInBlockedDialog ref={loginBlockedDialogRef} />
    </div>
  );
};

export default SignInPage;
