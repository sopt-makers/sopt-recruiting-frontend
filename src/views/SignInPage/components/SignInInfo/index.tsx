import { track } from '@amplitude/analytics-browser';
import { Link } from 'react-router-dom';

import Callout from '@components/Callout';
import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import { calloutButtonVar } from './style.css';

const SignInInfo = () => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { soptName, isMakers, season, group },
  } = useRecruitingInfo();

  return (
    <>
      <Title>
        {season}기 {soptName} {isMakers ? '' : group} 지원하기
      </Title>
      <Callout
        Button={
          <Link to="/sign-up" className={calloutButtonVar[deviceType]} onClick={() => track('click-signin-signup')}>
            새 지원서 작성하기
          </Link>
        }>
        <p>
          {season}기 {isMakers ? '' : group} 지원서 작성이 처음이라면 ‘새 지원서 작성하기’를 진행해주세요. 이전에
          지원서를 제출한 적이 있더라도 새 지원서를 작성해야 해요.
        </p>
      </Callout>
    </>
  );
};

export default SignInInfo;
