import useDate from '@hooks/useDate';
import { useDevice } from '@hooks/useDevice';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { containerVar } from './style.css';

const SignInPage = () => {
  const DEVICE_TYPE = useDevice();
  const { isLoading, NoMoreRecruit, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[DEVICE_TYPE]}>
      <SignInInfo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;
