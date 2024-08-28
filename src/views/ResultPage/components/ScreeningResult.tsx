import { track } from '@amplitude/analytics-browser';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect } from 'react';

import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import BigLoading from 'views/loadings/BigLoding';

import {
  bottomAnimation,
  bottomImg,
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
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, soptName, season, interviewStart, interviewEnd, applicationPassConfirmStart, isMakers },
  } = useRecruitingInfo();

  if (!name) return;

  const applicationDate = new Date(applicationPassConfirmStart || '');
  const applicationPassConfirmNextDay = new Date(applicationDate);
  applicationPassConfirmNextDay.setDate(applicationDate.getDate() + 1);

  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M월 dd일', { locale: ko });
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M월 dd일', { locale: ko });
  const formattedApplicationPassConfirmStart = format(applicationDate, 'M월 dd일 EEEE', {
    locale: ko,
  });
  const formattedApplicationPassConfirmNextDay = format(new Date(applicationPassConfirmNextDay || ''), 'M월 dd일', {
    locale: ko,
  });

  const SOPT_NAME = isMakers ? `SOPT ${soptName}` : soptName;
  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>{`안녕하세요. ${SOPT_NAME} 입니다.\n\n`}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`축하드립니다!`}</strong>
          <span className="amp-mask">
            {`
              서류 검토 결과, ${name}님은 인터뷰 대상자로 선정되셨습니다.

              ${season}기 ${SOPT_NAME} 인터뷰는 ${formattedInterviewStart} ~ ${formattedInterviewEnd} 기간 중 진행될 예정입니다.
  
              원할한 면접 진행을 위해, 아래 구글 폼에 불가능한 시간대를 모두 선택해 제출 부탁드립니다.
              ( 제출 마감 : ${formattedApplicationPassConfirmStart} 오후 8시 )
            `}
          </span>
          <span>{`( 구글폼 : `}</span>
          <a
            className={link}
            href={`https://${import.meta.env.VITE_SCREENING_PASS_LINK}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track('click-screening-google_form')}>
            {`https://${deviceType !== 'DESK' ? '\n' : ''}${import.meta.env.VITE_SCREENING_PASS_LINK}`}
          </a>
          <span>{` )\n`}</span>
          <br />
          <span>
            {`
            제출해주신 폼 내용을 기반으로 확정된 면접 일정 및 면접 안내를 내일(${formattedApplicationPassConfirmNextDay}) 오후 12시 전으로 이메일을 통해 공유드리겠습니다. 
              
            다시 한 번 진심으로 축하드리며, 인터뷰에서 뵙겠습니다! 
              
            문의 사항 및 궁금한 점은 아래 연락처로 문의 부탁드립니다.
            정동규 : 010-8696-3713 
            감사합니다. 
              
            ${SOPT_NAME} 운영진 드림
            `}
          </span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[deviceType]}`}>
          {`안녕하세요, ${SOPT_NAME}입니다.
          
          ${SOPT_NAME}에 관심을 갖고 지원해 주셔서 감사드립니다.

          ${name}님의 뛰어난 역량과 잠재력에도 불구하고 안타깝게도 귀하의 합격 소식을 전해드리지 못하게 되었습니다.

          비록 이번 ${season}기 ${soptName}에 모시지 못하게 되었으나, ${soptName}에 지원하시고자 쓰인 소중한 시간과 노력이 지원자님께서 IT 창업인으로서 멋진 역할을 해나가시는 데 작게나마 도움이 되는 경험이 되시길 바랍니다.

          ${SOPT_NAME}에 귀한 시간을 내어주셔서 다시 한 번 깊이 감사드립니다 :)
          향후에 더 좋은 인연으로 뵙기를 기다리겠습니다.
          감사합니다. 
          
          ${SOPT_NAME} 운영진 드림
          `}
        </p>
      )}
    </>
  );
};

const ScreeningResult = () => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { isMakers },
    handleSaveRecruitingInfo,
  } = useRecruitingInfo();
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
      {deviceType !== 'MOB' && pass && (
        <>
          <div className={bottomAnimation[isMakers ? 'makers' : 'sopt']} />
          {isMakers ? (
            <i className={bottomSvg}>
              <IconMakersLogo />
            </i>
          ) : (
            <picture className={bottomImg}>
              <source srcSet={imgSoptLogoWebp} type="image/webp" />
              <img src={imgSoptLogo} alt="sopt-logo" />
            </picture>
          )}
        </>
      )}
      <div className={scrollBottomGradVar[deviceType]} />
    </section>
  );
};

export default ScreeningResult;
