import { article, contactButton, container, errorButton, errorText, instruction } from '../../style.css';

const NoMore = ({ content }: { content: string }) => {
  return (
    <section className={container}>
      <article className={article}>
        <p className={errorText}>{content}</p>
        <a href="https://makers.sopt.org/" className={errorButton} target="_blank" rel="noreferrer">
          공식 홈페이지 가기
        </a>
      </article>
      <p className={instruction}>{`문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a id="chat-channel-button" href="http://pf.kakao.com/_sxaIWG" className={contactButton}>
        문의하기
      </a>
    </section>
  );
};

export default NoMore;
