import { useNavigate } from 'react-router-dom';

import { useDeviceType } from 'contexts/DeviceTypeProvider';

import ErrorCode from './components/ErrorCode';
import { ERROR_MESSAGE } from './constants';
import { article, contactButtonVar, container, errorButtonVar, errorTextVar, instructionVar } from './style.css';
import AmplitudeEventTrack from '@components/Button/AmplitudeEventTrack';

const ErrorPage = ({ code }: { code: 404 | 500 }) => {
  const { deviceType } = useDeviceType();
  const navigate = useNavigate();

  const handleGoBack = (code: 404 | 500) => {
    const hasPreviousPage = window.history.length > 1;

    if (code === 404 || !hasPreviousPage) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const handleClickErrorButton = () => {
    handleGoBack(code);
  };

  const CODE_KEY: 'CODE404' | 'CODE500' = `CODE${code}`;

  return (
    <section className={container}>
      <article className={article}>
        <ErrorCode code={code} />
        <p className={errorTextVar[deviceType]}>{ERROR_MESSAGE[CODE_KEY]?.text}</p>
        <AmplitudeEventTrack eventName={code === 404 ? 'click-error-home' : 'click-error-back'}>
          <button className={errorButtonVar[deviceType]} onClick={handleClickErrorButton}>
            {ERROR_MESSAGE[CODE_KEY]?.button}
          </button>
        </AmplitudeEventTrack>
      </article>
      <p
        className={
          instructionVar[deviceType]
        }>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <AmplitudeEventTrack eventName="click-error-ask">
        <a
          id="chat-channel-button"
          href="http://pf.kakao.com/_sxaIWG"
          target="_blank"
          rel="noreferrer noopener"
          className={contactButtonVar[deviceType]}>
          문의하기
        </a>
      </AmplitudeEventTrack>
    </section>
  );
};

export default ErrorPage;
