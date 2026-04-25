import { Link } from 'react-router-dom';

import Callout from '@components/Callout';
import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import { calloutButtonVar } from './style.css';
import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';
import { IconChevronRight } from '@sopt-makers/icons';

const SignInInfo = () => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { soptName, season, group },
  } = useRecruitingInfo();

  return (
    <>
      <Title>로그인</Title>
      <Callout
        Button={
          <AmplitudeEventTrack eventName="click-signin-signup">
            <Link to="/sign-up" className={calloutButtonVar[deviceType]}>
              회원가입
              <IconChevronRight style={{ width: 20, height: 20 }} />
            </Link>
          </AmplitudeEventTrack>
        }>
        <p>
          {`${season}기 지원이 처음이라면 '회원가입'을 진행해 주시기 바랍니다. 이전 기수에 가입한 경험이 있더라도, 기수별로 새로 회원가입을 해야 합니다.`}
        </p>
      </Callout>
    </>
  );
};

export default SignInInfo;
