import { lazy } from 'react';

import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import BigLoading from 'views/loadings/BigLoding';

import PasswordForm from './components/PasswordForm';
import { containerVar } from './style.css';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const PasswordPage = () => {
  const { deviceType } = useDeviceType();
  const { NoMoreRecruit, isLoading } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <Title>비밀번호 재설정하기</Title>
      <PasswordForm />
    </div>
  );
};

export default PasswordPage;
