import Title from '@components/Title';
import useDate from '@hooks/useDate';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import PasswordForm from './components/PasswordForm';
import { container } from './style.css';

const PasswordPage = () => {
  const { name: soptName, season, group, NoMoreRecruit, isLoading } = useDate();

  if (isLoading) return <BigLoading />;

  const isMakers = soptName?.toLowerCase().includes('makers');

  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={container}>
      <Title>비밀번호 재설정하기</Title>
      <PasswordForm season={season} group={group} />
    </div>
  );
};

export default PasswordPage;
