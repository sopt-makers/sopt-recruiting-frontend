import { track } from '@amplitude/analytics-browser';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Callout from '@components/Callout';
import Title from '@components/Title';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import { calloutButtonVar, strongText } from './style.css';

const SignInInfo = () => {
  const DEVICE_TYPE = useDevice();
  const {
    recruitingInfo: { soptName, isMakers, season, group },
  } = useContext(RecruitingInfoContext);

  return (
    <>
      <Title>
        {season}기 {soptName} {isMakers ? '' : group} 지원하기
      </Title>
      <Callout
        Button={
          <Link to="/sign-up" className={calloutButtonVar[DEVICE_TYPE]} onClick={() => track('click-signin-signup')}>
            새 지원서 작성하기
          </Link>
        }>
        <p>
          {season}기 {isMakers ? '' : group} 지원서 작성이 처음이라면 ‘새 지원서 작성하기’를 진행해주세요.{' '}
          <strong className={strongText}>이전에 지원서 </strong>를 제출한 적이 있더라도{' '}
          <strong className={strongText}>반드시</strong> 새 지원서를 작성해야 해요.
        </p>
      </Callout>
    </>
  );
};

export default SignInInfo;
