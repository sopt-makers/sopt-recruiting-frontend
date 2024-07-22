import { useContext } from 'react';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import SignInForm from './components/SignInForm';
import SignInInfo from './components/SignInInfo';
import { container } from './style.css';

const SignInPage = () => {
  const {
    recruitingInfo: { soptName, season, group },
  } = useContext(RecruitingInfoContext);

  return (
    <div className={container}>
      <SignInInfo soptName={soptName} season={season} group={group} />
      <SignInForm season={season} group={group} />
    </div>
  );
};

export default SignInPage;
