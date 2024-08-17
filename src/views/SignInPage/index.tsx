import { useContext } from 'react';

import useDate from '@hooks/useDate';
import { DeviceTypeContext } from '@store/deviceTypeContext';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';

const SignInPage = () => {
  const { deviceType } = useContext(DeviceTypeContext);
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
