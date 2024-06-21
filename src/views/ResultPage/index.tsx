import { useContext, useEffect } from 'react';

import Title from '@components/Title';
import { ThemeContext } from '@store/theme-context';

import { bottomAnimation, container, contentWrapper, content, strongText } from './style.css';

const Content = () => {
  const name = '000';
  return (
    <p className={content}>
      <span>{`안녕하세요. `}</span>
      <strong className={strongText}>NOW SOPT</strong>
      <span>{`입니다.\n\n\n`}</span>
      <strong className={strongText}>축하드립니다!</strong>
      <span>{`\n\n${name}님은 34기 NOW SOPT 신입회원 모집에 최종 합격하셨습니다.\n\n\n
      ${name}님과 34기 NOW SOPT를 함께하게 되어 진심으로 기쁩니다.\n
      향후 활동은 NOW SOPT 공식 노션과 카카오톡 단체 대화방, SOPT 공식 디스코드를 통해\n
      운영 및 진행됩니다.\n\n\n
      오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정이니 참고 부탁드립니다.\n\n\n`}</span>
      <strong className={strongText}>SOPT의 34번째 열정이 되신 것을 축하드립니다!</strong>
    </p>
  );
};

const ResultPage = () => {
  const { handleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    handleDarkMode();
  }, [handleDarkMode]);

  return (
    <section className={container}>
      <div className={contentWrapper}>
        <Title>결과 확인</Title>
        <Content />
      </div>
      <div className={bottomAnimation} />
    </section>
  );
};

export default ResultPage;
