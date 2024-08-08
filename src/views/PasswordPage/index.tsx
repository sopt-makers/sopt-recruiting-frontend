import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { useDevice } from '@hooks/useDevice';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import PasswordForm from './components/PasswordForm';
import { containerVar } from './style.css';

const PasswordPage = () => {
  const DEVICE_TYPE = useDevice();
  const { NoMoreRecruit, isLoading, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[DEVICE_TYPE]}>
      <Title>비밀번호 재설정하기</Title>
      <PasswordForm />
    </div>
  );
};

export default PasswordPage;
