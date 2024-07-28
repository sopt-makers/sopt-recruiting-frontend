import useDate from '@hooks/useDate';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { container } from './style.css';

const SignInPage = () => {
  const { name: soptName, season, group, isLoading, NoMoreRecruit, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <div className={container}>
      <SignInInfo soptName={soptName} isMakers={isMakers} season={season} group={group} />
      <SignInForm season={season} group={group} />
    </div>
  );
};

export default SignInPage;
