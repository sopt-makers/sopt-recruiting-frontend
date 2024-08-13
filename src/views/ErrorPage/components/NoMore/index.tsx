import { track } from '@amplitude/analytics-browser';

import { useDevice } from '@hooks/useDevice';

import { article, contactButtonVar, container, errorButtonVar, errorText, instructionVar } from '../../style.css';

interface NoMoreProps {
  isMakers?: boolean;
  content: string;
}

const NoMore = ({ isMakers, content }: NoMoreProps) => {
  const DEVICE_TYPE = useDevice();

  return (
    <section className={container[isMakers == undefined ? 'withoutHeader' : 'withHeader']}>
      <article className={article}>
        <p className={errorText}>{content}</p>
        <a
          href={isMakers ? 'https://makers.sopt.org/' : 'https://www.sopt.org/'}
          className={errorButtonVar[DEVICE_TYPE]}
          target="_blank"
          rel="noreferrer noopener"
          onClick={() => track(isMakers ? 'click-nomore-official_makers' : 'click-nomore-official')}>
          공식 홈페이지 가기
        </a>
      </article>
      <p className={instructionVar[DEVICE_TYPE]}>{`문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a
        id="chat-channel-button"
        href={isMakers ? 'https://pf.kakao.com/_sxaIWG' : 'https://pf.kakao.com/_JdTKd'}
        target="_blank"
        rel="noreferrer noopener"
        className={contactButtonVar[DEVICE_TYPE]}
        onClick={() => track(isMakers ? 'click-nomore-ask_makers' : 'click-nomore-ask')}>
        문의하기
      </a>
    </section>
  );
};

export default NoMore;
