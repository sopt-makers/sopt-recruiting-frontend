import { lazy } from 'react';
import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import SignupForm from './components/SignupForm';
import { containerVar } from './style.css';
import BigLoading from 'views/loadings/BigLoding';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const SignupPage = () => {
  const { deviceType } = useDeviceType();
  const { NoMoreRecruit, NoMoreApply, isLoading } = useRecruitingSchedule();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit || NoMoreApply) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  return (
    <div className={containerVar[deviceType]}>
      <Title>회원가입</Title>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
