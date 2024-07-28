import { track } from '@amplitude/analytics-browser';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import ErrorCode from './components/ErrorCode';
import { ERROR_MESSAGE } from './constants';
import { article, contactButton, container, errorButton, errorText, instruction } from './style.css';

const ErrorPage = ({ code }: { code: 404 | 500 }) => {
  const navigate = useNavigate();

  const {
    recruitingInfo: { isMakers },
  } = useContext(RecruitingInfoContext);

  const handleGoBack = (code: 404 | 500) => {
    const hasPreviousPage = window.history.length > 1;

    if (code === 404 || !hasPreviousPage) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const handleClickErrorButton = () => {
    code === 404 ? track('click-error-home') : track('click-error-back');
    handleGoBack(code);
  };

  const CODE_KEY: 'CODE404' | 'CODE500' = `CODE${code}`;

  return (
    <section className={container[isMakers == undefined ? 'withoutHeader' : 'withHeader']}>
      <article className={article}>
        <ErrorCode code={code} />
        <p className={errorText}>{ERROR_MESSAGE[CODE_KEY]?.text}</p>
        <button className={errorButton} onClick={handleClickErrorButton}>
          {ERROR_MESSAGE[CODE_KEY]?.button}
        </button>
      </article>
      <p className={instruction}>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a
        id="chat-channel-button"
        href="http://pf.kakao.com/_sxaIWG"
        target="_blank"
        rel="noreferrer noopener"
        className={contactButton}
        onClick={() => track('click-error-ask')}>
        문의하기
      </a>
    </section>
  );
};

export default ErrorPage;
