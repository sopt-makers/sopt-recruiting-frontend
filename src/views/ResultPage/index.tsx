import { useContext, useEffect } from 'react';

import Title from '@components/Title';
import { ThemeContext } from '@store/ThemeContext';

import imgLogo from './assets/imgLogo.png';
import imgLogoWebp from './assets/imgLogo.webp';
import { bottomAnimation, container, contentWrapper, content, strongText, bottomImg } from './style.css';

/** 화면에 표시될 텍스트 */
const Content = ({ isPass }: { isPass: boolean }) => {
  const name = '000';

  return (
    <>
      {isPass ? (
        <p className={content}>
          <span>{`안녕하세요. NOW SOPT 입니다.\n\n`}</span>
          <strong className={strongText}>{`축하드립니다!`}</strong>
          <span>
            {`
              ${name}님은 34기 NOW SOPT 신입회원 모집에 최종 합격하셨습니다.
  
              ${name}님과 34기 NOW SOPT를 함께하게 되어 진심으로 기쁩니다.
              향후 활동은 NOW SOPT 공식 노션과 카카오톡 단체 대화방, SOPT 공식 디스코드를 통해
              운영 및 진행됩니다.
          
              오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정이니 참고 부탁드립니다.\n
            `}
          </span>
          <strong className={strongText}>{`SOPT의 34번째 열정이 되신 것을 축하드립니다!`}</strong>
        </p>
      ) : (
        <p className={content}>
          {`안녕하세요. NOW SOPT입니다.
              
            ${name}님은 34기 NOW SOPT 신입회원 모집에 불합격하셨습니다.

            지원자님의 뛰어난 역량과 잠재력에도 불구하고 안타깝게도 귀하의 최종 합격 소식을
            전해드리지 못하게 되었습니다.

            한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 SOPT에 지원하셨던
            경험이 한 사람의 IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.
          `}
        </p>
      )}
    </>
  );
};

const ResultPage = () => {
  const { handleChangeMode } = useContext(ThemeContext);
  const isPass = true;

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  return (
    <section className={container}>
      <div className={contentWrapper}>
        <Title>결과 확인</Title>
        <Content isPass={isPass} />
      </div>
      {isPass && (
        <>
          <div className={bottomAnimation} />
          <picture className={bottomImg}>
            <source srcSet={imgLogoWebp} type="image/webp" />
            <img src={imgLogo} alt="sopt-logo" />
          </picture>
        </>
      )}
    </section>
  );
};

export default ResultPage;
