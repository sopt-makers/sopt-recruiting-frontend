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
import useGetFinalResult from '../hooks/useGetFinalResult';
import { format } from '@utils/dateFormatter';
import { track } from '@amplitude/analytics-browser';

const Content = ({ pass }: { pass?: boolean }) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, soptName, season, group, isMakers, finalPassConfirmStart },
  } = useRecruitingInfo();

  if (!name) return;

  const finalDate = new Date(finalPassConfirmStart || '');
  const formattedFinalPassConfirmStart = format(finalDate, 'dd일');

  const SOPT_NAME = isMakers ? `SOPT ${soptName}` : soptName;
  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>{`안녕하세요. ${season}기 ${SOPT_NAME}입니다.\n\n`}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`축하드립니다!`}</strong>
          <span className="amp-mask">
            {`
              ${name}님은 ${season}기 ${SOPT_NAME} ${!isMakers ? group : ''} 모집에 최종 합격하셨습니다.
              ${name}님과 함께하게 되어 진심으로 기쁩니다.

              향후 활동은 ${SOPT_NAME} 공식 노션과 카카오톡 단체 대화방, ${SOPT_NAME} 공식 슬랙을 통해 운영 및 진행됩니다.
              원활한 소통을 위해 신입 회원분들의 정보를 수집하고자 하니, 아래에 있는 구글폼을 오늘(${formattedFinalPassConfirmStart}) 자정까지 입력해주세요.
            `}
          </span>
          <span>{`( 구글폼 : `}</span>
          <a
            className={link}
            href={`https://${import.meta.env.VITE_FINAL_PASS_LINK}`}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => track('click-final-google_form')}>
            {`https://${deviceType !== 'DESK' ? '\n' : ''}${import.meta.env.VITE_FINAL_PASS_LINK}`}
          </a>
          <span>{` )\n`}</span>
          <br />
          <span>
            {`
            오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정이니 참고 부탁드립니다.

            ${SOPT_NAME} ${season}기의 여정에 합류하신 것을 축하드립니다!
            지원자님과 함께 할 makers의 새로운 시작을 기대하며,

            ${SOPT_NAME} 드림
            `}
          </span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[deviceType]}`}>
          {`안녕하세요. ${SOPT_NAME}입니다.
          ${name}님은 ${season}기 ${SOPT_NAME} 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고 안타깝게도 귀하의 최종 합격 소식을 전해드리지 못하게 되었습니다.
          한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 ${SOPT_NAME}에 지원하셨던 경험이 IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.

          ${SOPT_NAME} 드림`}
        </p>
      )}
    </>
  );
};

const FinalResult = () => {
  const { deviceType } = useDeviceType();
  const { finalResult, finalResultIsLoading } = useGetFinalResult();
  const {
    recruitingInfo: { isMakers },
    handleSaveRecruitingInfo,
  } = useRecruitingInfo();

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

export default FinalResult;
