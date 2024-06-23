import { Link } from 'react-router-dom';

import ErrorCode from './components/ErrorCode';
import ERROR_MESSAGE from './constants/ERROR_MESSAGE';
import { article, contactButton, container, errorButton, errorText, instruction } from './style.css';

const ErrorPage = ({ code }: { code: 404 | 500 }) => {
  const CODE_KEY: 'CODE404' | 'CODE500' = `CODE${code}`;
  const handleClickKakao = () => {
    // window.Kakao.Channel.chat({
    //   channelPublicId: '_sxaIWG',
    // });
  };

  return (
    <section className={container}>
      <article className={article}>
        <ErrorCode code={code} />
        <p className={errorText}>{ERROR_MESSAGE[CODE_KEY]?.text}</p>
        <Link className={errorButton} to={code === 404 ? '/' : '-1'}>
          {ERROR_MESSAGE[CODE_KEY]?.button}
        </Link>
      </article>
      <p className={instruction}>{`문제가 지속적으로 발생하거나 문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <button className={contactButton} type="button" onClick={handleClickKakao}>
        문의하기
      </button>
    </section>
  );
};

export default ErrorPage;
