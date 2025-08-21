import { lazy } from 'react';

import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import BigLoading from 'views/loadings/BigLoding';

import SignupForm from './components/SignupForm';
import { containerVar } from './style.css';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignupPage = () => {
  const { deviceType } = useDeviceType();
  const { NoMoreRecruit, NoMoreApply, isLoading } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit || NoMoreApply) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <Title>새 지원서 작성하기</Title>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
