import { track } from '@amplitude/analytics-browser';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useContext, useEffect } from 'react';

import Title from '@components/Title';
import { DeviceTypeContext } from '@store/deviceTypeContext';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import BigLoading from 'views/loadings/BigLoding';

import {
  bottomAnimation,
  bottomSvg,
  container,
  contentVar,
  contentWrapperVar,
  link,
  scrollBottomGradVar,
  strongText,
} from './style.css';
import IconMakersLogo from '../assets/IconMakersLogo';
import imgSoptLogo from '../assets/imgSoptLogo.png';
import imgSoptLogoWebp from '../assets/imgSoptLogo.webp';
import useGetScreeningResult from '../hooks/useGetScreeningResult';

const Content = ({ pass }: { pass?: boolean }) => {
  const { deviceType } = useContext(DeviceTypeContext);
  const {
    recruitingInfo: {
      name,
      soptName,
      season,
      interviewStart,
      interviewEnd,
      applicationPassConfirmStart,
      isMakers,
      group,
    },
  } = useContext(RecruitingInfoContext);

  if (!name) return;

  const applicationDate = new Date(applicationPassConfirmStart || '');
  const applicationPassConfirmNextDay = new Date(applicationDate);
  applicationPassConfirmNextDay.setDate(applicationDate.getDate() + 1);

  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M/dd (E)', { locale: ko });
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M/dd (E)', { locale: ko });
  const formattedApplicationPassConfirmStart = format(applicationDate, 'M월 dd일 EEEE', {
    locale: ko,
  });
  const formattedApplicationPassConfirmNextDay = format(new Date(applicationPassConfirmNextDay || ''), 'dd일 EEEE', {
    locale: ko,
  });

  const SOPT_NAME = isMakers ? `SOPT ${soptName}` : soptName;
  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>{`안녕하세요. ${season}기 ${SOPT_NAME}입니다.\n\n`}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`축하드립니다!`}</strong>
          <span className="amp-mask">
            {`
              서류 검토 결과, ${name}님은 면접 대상자로 선정되셨습니다.

              ${season}기 ${group} 면접은 ${formattedInterviewStart} ~ ${formattedInterviewEnd} 양일 간 
              오프라인으로 진행될 예정입니다.
  
              모든 면접 대상자 분들을 대상으로 면접 가능 시간을 조사하려 합니다.
              아래 구글폼을 금일 20시 (${formattedApplicationPassConfirmStart} 오후 8시) 까지 제출해주세요.
            `}
          </span>
          <a
            className={link}
            href={`https://${import.meta.env.VITE_SCREENING_PASS_LINK}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track('click-screening-google_form')}>
            {`https://${deviceType !== 'DESK' ? '\n' : ''}${import.meta.env.VITE_SCREENING_PASS_LINK}`}
          </a>
          <br />
          <span>
            {`
            면접 안내 사항 및 폼 제출 내용을 기반으로 한  면접 시간표를
            내일 (${formattedApplicationPassConfirmNextDay}) 오후 12시 전으로  이메일을 통해 전해드리겠습니다. 

            다시 한 번 진심으로 축하드리며,
            면접에서 뵙도록 하겠습니다:)
            `}
          </span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[deviceType]}`}>
          {`안녕하세요, ${season}기 ${SOPT_NAME}입니다.
          
          먼저 ${season}기 ${SOPT_NAME} ${group}회원 모집에 관심을 가지고 
          합류 여정을 함께해주셔서 감사하다는 말씀을 드립니다. 

          ${name}님은 ${season}기 ${SOPT_NAME} ${group}회원 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고 
          안타깝게도 귀하의 서류 합격 소식을 전해드리지 못하게 되었습니다.

          한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 SOPT에 지원하셨던 경험이 
          IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.  

          감사합니다.
          `}
        </p>
      )}
    </>
  );
};

const ScreeningResult = () => {
  const { deviceType } = useContext(DeviceTypeContext);
  const {
    recruitingInfo: { isMakers },
    handleSaveRecruitingInfo,
  } = useContext(RecruitingInfoContext);
  const { screeningResult, screeningResultIsLoading } = useGetScreeningResult();

  const { name, interviewStart, interviewEnd, pass } = screeningResult?.data || {};

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
      interviewStart,
      interviewEnd,
    });
  }, [name, interviewStart, interviewEnd, handleSaveRecruitingInfo]);

  if (screeningResultIsLoading) return <BigLoading />;

  return (
    <section className={container}>
      <div style={{ overflow: 'auto', height: '100%' }}>
        <div className={contentWrapperVar[deviceType]}>
          <Title>결과 확인</Title>
          <Content pass={pass} />
        </div>
      </div>
      {pass && <div className={bottomAnimation[isMakers ? 'makers' : 'sopt']} />}
      <div className={scrollBottomGradVar[deviceType]} />
    </section>
  );
};

export default ScreeningResult;
