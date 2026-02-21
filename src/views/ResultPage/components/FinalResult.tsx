import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import IconMakersLogo from '../assets/IconMakersLogo';

import {
  bottomAnimation,
  bottomImgVar,
  bottomSvg,
  container,
  contentVar,
  contentWrapperVar,
  scrollBottomGradVar,
  strongText,
} from './style.css';

import IconSoptRecrutingLogo from 'views/ResultPage/assets/IconSoptRecrutingLogo';
import { useEffect } from 'react';
import useGetFinalResult from 'views/ResultPage/hooks/useGetFinalResult';
import BigLoading from 'views/loadings/BigLoding';

const MOBILE_HEADER_HEIGHT = 73;
const DESKTOP_HEADER_HEIGHT = 79;

const Content = ({ pass }: { pass?: boolean }) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, soptName, season, group },
  } = useRecruitingInfo();

  if (!name) return;

  // const finalDate = new Date(finalPassConfirmStart || '');
  // const formattedFinalPassConfirmStart = format(finalDate, 'dd일');

  const SOPT_NAME = __IS_MAKERS__ ? `SOPT makers` : `${soptName}`;
  const GROUP_NAME = __IS_MAKERS__ ? '신입' : group;

  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>
            {`
            안녕하세요. ${season}기 ${SOPT_NAME} 입니다.

            `}
          </span>
          <strong className={strongText[__IS_MAKERS__ ? 'makers' : 'sopt']}>{`축하드립니다!\n`}</strong>
          <span className="amp-mask">{`${name}님은 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 `}</span>
          <strong className={strongText[__IS_MAKERS__ ? 'makers' : 'sopt']}>{`최종 합격`}</strong>
          {`하셨습니다.\n\n`}
          <span className="amp-mask">{`${name}님과 ${season}기 ${SOPT_NAME}를 함께하게 되어 진심으로 기쁩니다.\n\n`}</span>
          <span className="amp-mask">
            {`향후 활동은 ${SOPT_NAME} 공식 노션과 카카오톡 단체 대화방, 디스코드를 통해 운영 및 진행됩니다.
            오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정입니다.\n\n`}
          </span>
          <span className="amp-mask">{`SOPT의 ${season}번째 열정이 되신 것을 축하드립니다!`}</span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[deviceType]}`} style={{ wordBreak: 'keep-all' }}>
          {`안녕하세요. ${season}기 ${SOPT_NAME}입니다.

          먼저 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 관심을 가지고
          합류 여정을 함께해주셔서 감사하다는 말씀을 드립니다.

          ${name}님은 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고  
          안타깝게도 귀하의 최종 합격 소식을 전해드리지 못하게 되었습니다.  

          한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 SOPT에 지원하셨던 경험이 
          IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다. 

          감사합니다.
          `}
        </p>
      )}
    </>
  );
};

const FinalResult = () => {
  const { deviceType } = useDeviceType();
  const { finalResult, finalResultIsLoading } = useGetFinalResult();
  const { handleSaveRecruitingInfo } = useRecruitingInfo();

  const { name, pass, season } = finalResult?.data || {};

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
      season,
    });
  }, [name, season, handleSaveRecruitingInfo]);

  if (finalResultIsLoading) return <BigLoading />;

  return (
    <section
      className={container}
      style={{ height: `calc(100dvh - ${deviceType === 'MOB' ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT}px)` }}>
      <div style={{ overflow: 'auto' }}>
        <div className={contentWrapperVar[deviceType]}>
          <Title>결과 확인</Title>
          <Content pass={pass} />
        </div>
      </div>
      <>
        <div className={bottomAnimation[__IS_MAKERS__ ? 'makers' : 'sopt']} />
        {__IS_MAKERS__
          ? deviceType !== 'MOB' && (
              <i className={bottomSvg}>
                <IconMakersLogo />
              </i>
            )
          : pass && (
              <div className={bottomImgVar[deviceType]}>
                <IconSoptRecrutingLogo deviceType={deviceType} />
              </div>
            )}
      </>
      <div className={scrollBottomGradVar[deviceType]} />
    </section>
  );
};

export default FinalResult;
