import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useContext, useEffect } from 'react';

import Title from '@components/Title';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import BigLoading from 'views/loadings/BigLoding';

import { bottomAnimation, bottomImg, container, content, contentWrapper, strongText } from './style.css';
import imgLogo from '../assets/imgLogo.png';
import imgLogoWebp from '../assets/imgLogo.webp';
import useGetScreeningResult from '../hooks/useGetScreeningResult';

const Content = ({ pass }: { pass?: boolean }) => {
  const {
    recruitingInfo: { name, season, group, interviewStart, interviewEnd },
  } = useContext(RecruitingInfoContext);

  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M/dd(E)', { locale: ko });
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M/dd(E)', { locale: ko });

  return (
    <>
      {pass ? (
        <p className={content}>
          <span>{`안녕하세요. ${season}기 NOW SOPT 입니다.\n\n`}</span>
          <strong className={strongText}>{`축하드립니다!`}</strong>
          <span>
            {`
              서류 검토 결과, ${name}님은 면접 대상자로 선정되셨습니다.
  
              ${season}기 ${group} 면접은 ${formattedInterviewStart} ~ ${formattedInterviewEnd} 양일 간 오프라인 으로 진행될 예정입니다.
              모든 면접 대상자 분들은 아래 구글폼을 제출해주세요.
            `}
          </span>
          <a href="https://sopt.org">https://sopt.org</a>
          <span>
            {`
              위 구글폼은 금일 20시 정각(14일 목요일 오후 8시)까지 제출해주셔야 합니다.
              면접 안내 사항 및 폼 제출 내용을 기반으로 한 면접 시간표를 내일(15일 금요일) 오후 12시 전으로 이메일을
              통해 전해드리겠습니다.
            `}
          </span>
          <span>{`다시 한 번 진심으로 축하드리며, 면접에서 뵙도록 하겠습니다. :)`}</span>
        </p>
      ) : (
        <p className={content}>
          {`안녕하세요. NOW SOPT입니다.
              
            ${name}님은 ${season}기 NOW SOPT 신입회원 서류 모집에 불합격하셨습니다.

            지원자님의 뛰어난 역량과 잠재력에도 불구하고 안타깝게도 귀하의 합격 소식을
            전해드리지 못하게 되었습니다.

            한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 SOPT에 지원하셨던
            경험이 한 사람의 IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.
          `}
        </p>
      )}
    </>
  );
};

const ScreeningResult = () => {
  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);
  const { screeningResult, screeningResultIsLoading } = useGetScreeningResult();

  const { name, season, group } = screeningResult?.data || {};

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
      season,
      group,
    });
  }, [name, season, group, handleSaveRecruitingInfo]);

  if (screeningResultIsLoading) return <BigLoading />;

  const { pass } = screeningResult?.data || {};

  return (
    <section className={container}>
      <div className={contentWrapper}>
        <Title>결과 확인</Title>
        <Content pass={pass} />
      </div>
      {pass && (
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

export default ScreeningResult;
