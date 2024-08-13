import { track } from '@amplitude/analytics-browser';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useContext, useEffect } from 'react';

import Title from '@components/Title';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
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
import useGetFinalResult from '../hooks/useGetFinalResult';

const Content = ({ pass }: { pass?: boolean }) => {
  const DEVICE_TYPE = useDevice();
  const {
    recruitingInfo: { name, soptName, season, group, isMakers, finalPassConfirmStart },
  } = useContext(RecruitingInfoContext);

  if (!name) return;

  const finalDate = new Date(finalPassConfirmStart || '');
  const formattedFinalPassConfirmStart = format(finalDate, 'M월 dd일 EEEE', {
    locale: ko,
  });

  const SOPT_NAME = isMakers ? `SOPT ${soptName}` : soptName;
  return (
    <>
      {pass ? (
        <p className={contentVar[DEVICE_TYPE]}>
          <span>{`안녕하세요. ${SOPT_NAME}입니다.\n\n`}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`축하드립니다!`}</strong>
          <span className="amp-mask">
            {`
              ${name}님은 ${season}기 ${SOPT_NAME} ${!isMakers ? group : ''} 신입회원 모집에 최종 합격하셨습니다.
  
              ${name}님과 함께하게 되어 진심으로 기쁩니다.
              향후 활동은 ${SOPT_NAME} 공식 노션과 슬랙,카카오톡 단체 대화방, ${SOPT_NAME} 공식 디스코드 등을 통해 운영 및 진행됩니다.
          
              아래 구글 폼으로 각 워크스페이스 이메일 계정 및 필수 정보를 제출해주시길 바랍니다.
            ( 제출 마감 : ${formattedFinalPassConfirmStart} 오후 11:59 )
            `}
          </span>
          <span>{`( 구글폼 : `}</span>
          <a
            className={link}
            href={`https://${import.meta.env.VITE_FINAL_PASS_LINK}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track('click-final-google_form')}>
            {`https://${DEVICE_TYPE !== 'DESK' ? '\n' : ''}${import.meta.env.VITE_FINAL_PASS_LINK}`}
          </a>
          <span>{` )\n`}</span>
          <br />
          <span>
            {`
            제출해주신 구글 폼을 통해 순차적으로 워크스페이스 초대해드릴 예정이며
            금일 중으로 카카오톡 단체 대화방에 초대해드릴 예정이니 참고 부탁드립니다. 
            
            다시 한 번 ${SOPT_NAME} ${season}기 합류를 진심으로 축하드립니다! 
            
            ${SOPT_NAME} 운영진 드림
            `}
          </span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[DEVICE_TYPE]}`}>
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

const FinalResult = () => {
  const DEVICE_TYPE = useDevice();
  const { finalResult, finalResultIsLoading } = useGetFinalResult();
  const {
    recruitingInfo: { isMakers },
    handleSaveRecruitingInfo,
  } = useContext(RecruitingInfoContext);

  const { name, pass } = finalResult?.data || {};

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
    });
  }, [name, handleSaveRecruitingInfo]);

  if (finalResultIsLoading) return <BigLoading />;

  return (
    <section className={container}>
      <div style={{ overflow: 'auto', height: '100%' }}>
        <div className={contentWrapperVar[DEVICE_TYPE]}>
          <Title>결과 확인</Title>
          <Content pass={pass} />
        </div>
      </div>
      {DEVICE_TYPE !== 'MOB' && pass && (
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
      <div className={scrollBottomGradVar[DEVICE_TYPE]} />
    </section>
  );
};

export default FinalResult;
