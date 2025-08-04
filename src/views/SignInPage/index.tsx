import { lazy } from 'react';

import useDate from '@hooks/useDate';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';
import { IS_MAKERS } from '@constants/mode';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignInPage = () => {
  const { deviceType } = useDeviceType();
  const { isLoading, NoMoreRecruit } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={IS_MAKERS} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <SignInInfo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
