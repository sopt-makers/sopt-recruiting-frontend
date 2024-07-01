import { Link, To } from 'react-router-dom';

import ErrorCode from './components/ErrorCode';
import { ERROR_MESSAGE } from './constants';
import { article, contactButton, container, errorButton, errorText, instruction } from './style.css';

const ErrorPage = ({ code }: { code: 404 | 500 }) => {
  const CODE_KEY: 'CODE404' | 'CODE500' = `CODE${code}`;

  return (
    <section className={container}>
      <article className={article}>
        <ErrorCode code={code} />
        <p className={errorText}>{ERROR_MESSAGE[CODE_KEY]?.text}</p>
        <Link className={errorButton} to={code === 404 ? '/' : (-1 as To)}>
          {ERROR_MESSAGE[CODE_KEY]?.button}
        </Link>
      </article>
      <p className={instruction}>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a id="chat-channel-button" href="javascript:chatChannel()" className={contactButton}>
        문의하기
      </a>
    </section>
  );
};

export default ErrorPage;
