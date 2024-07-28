import Title from '@components/Title';
import useDate from '@hooks/useDate';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import SignupForm from './components/SignupForm';
import { container } from './style.css';

const SignupPage = () => {
  const { season, group, NoMoreRecruit, NoMoreApply, isLoading, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit || NoMoreApply) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={container}>
      <Title>새 지원서 작성하기</Title>
      <SignupForm season={season} group={group} />
    </div>
  );
};

export default SignupPage;
