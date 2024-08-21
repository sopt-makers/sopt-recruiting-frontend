import { lazy } from 'react';

import useDate from '@hooks/useDate';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignInPage = () => {
  const { deviceType } = useDeviceType();
  const { isLoading, NoMoreRecruit, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <SignInInfo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
