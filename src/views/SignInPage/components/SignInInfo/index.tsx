import { Link } from 'react-router-dom';

import Callout from '@components/Callout';
import Title from '@components/Title';

import { calloutButton, strongText } from './style.css';

interface SignInInfoProps {
  season?: number;
}

const SignInInfo = ({ season }: SignInInfoProps) => {
  return (
    <>
      <Title>{season}기 Makers 지원하기</Title>
      <Callout
        Button={
          <Link to="/sign-up" className={calloutButton}>
            새 지원서 작성하기
          </Link>
        }>
        <p>
          {season}기 Makers 지원서 작성이 처음이라면 ‘새 지원서 작성하기’를 진행해주세요.{' '}
          <strong className={strongText}>이전에 지원서 </strong>를 제출한 적이 있더라도{' '}
          <strong className={strongText}>반드시</strong> 새 지원서를 작성해야 해요.
        </p>
      </Callout>
    </>
  );
};

export default SignInInfo;
