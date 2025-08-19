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
import { IS_MAKERS } from '@constants/mode';

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

  const SOPT_NAME = IS_MAKERS ? `SOPT makers` : `${soptName}`;
  return (
    <>
      {!IS_MAKERS && pass ? (
        <p className={contentVar[deviceType]}>
          <span>
            {`
            안녕하세요. ${season}기 ${SOPT_NAME} 입니다.

            `}
          </span>
          <strong className={strongText[IS_MAKERS ? 'makers' : 'sopt']}>{`축하드립니다!\n`}</strong>
          <span className="amp-mask">
            {`${name}님은 ${season}기 ${SOPT_NAME} ${!IS_MAKERS ? group : ''}회원 모집에 `}
          </span>
          <strong className={strongText[IS_MAKERS ? 'makers' : 'sopt']}>{`최종 합격`}</strong>
          {`하셨습니다.\n\n`}

          <span className="amp-mask">{`${name}님과 ${season}기 ${SOPT_NAME}를 함께하게 되어 진심으로 기쁩니다.\n\n`}</span>
          <span className="amp-mask">
            {`향후 활동은 ${SOPT_NAME} 공식 노션과 카카오톡 단체 대화방, 디스코드를 통해 운영 및 진행됩니다. 오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정입니다.\n\n`}
          </span>
          <span className="amp-mask">{`SOPT의 ${season}번째 열정이 되신 것을 축하드립니다!`}</span>
        </p>
      ) : !IS_MAKERS && !pass ? (
        <p className={`amp-mask ${contentVar[deviceType]}`} style={{ wordBreak: 'keep-all' }}>
          {`안녕하세요. ${season}기 ${SOPT_NAME}입니다.

          먼저 ${season}기 ${SOPT_NAME} ${group}회원 모집에 관심을 가지고 합류 여정을 함께해주셔서 감사하다는 말씀을 드립니다.

          ${name}님은 ${season}기 ${SOPT_NAME} ${group}회원 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고
          안타깝게도 귀하의 최종 합격 소식을 전해드리지 못하게 되었습니다.  

          한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나 저희 SOPT에 지원하셨던 경험이 IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.  

          감사합니다.
          `}
        </p>
      ) : IS_MAKERS && pass ? (
        <p className={contentVar[deviceType]}>
          <span>
            {`
            안녕하세요. ${SOPT_NAME} 입니다.

            축하드립니다!
            `}
          </span>
          <span className="amp-mask">
            {`${name}님은 ${season}기 ${SOPT_NAME} ${!IS_MAKERS ? group : ''}회원 모집에 `}
          </span>
          <strong className={strongText[IS_MAKERS ? 'makers' : 'sopt']}>{`최종 합격`}</strong>
          {`하셨습니다.\n\n`}
          <span className="amp-mask">{`${name}님과 함께하게 되어 진심으로 기쁩니다.\n`}</span>
          <span className="amp-mask">
            {`향후 활동은 ${SOPT_NAME} 공식 노션과 카카오톡 단체 대화방, SOPT 공식 디스코드등을 통해 운영 및 진행됩니다. 
              
              오늘 중으로 카카오톡 단체 대화방에 초대해드릴 예정이니 참고 부탁드립니다.\n\n`}
          </span>
          <span className="amp-mask">{`다시 한 번 ${SOPT_NAME} ${season}기 합류를 진심으로 축하드립니다!`}</span>
        </p>
      ) : (
        IS_MAKERS &&
        !pass && (
          <p className={`amp-mask ${contentVar[deviceType]}`}>
            {`안녕하세요. ${SOPT_NAME}입니다.

            ${SOPT_NAME}에 관심을 갖고 지원해 주셔서 감사드립니다.
            ${name}님의 뛰어난 역량과 잠재력에도 불구하고 안타깝게도 귀하의 합격 소식을 전해드리지 못하게 되었습니다.

            비록 이번 ${season}기 makers에 모시지 못하게 되었으나, makers에 지원하시고자 쓰인 소중한 시간과 노력이 지원자님께서 IT 창업인으로서 멋진 역할을 해나가시는 데 작게나마 도움이 되는 경험이 되셨길 바랍니다.

            ${SOPT_NAME}에 귀한 시간을 내어주셔서 다시 한 번 깊이 감사드립니다 :)
            향후에 더 좋은 인연으로 뵙기를 기다리겠습니다.
            감사합니다.

            SOPT makers 드림
          `}
          </p>
        )
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
        <div className={bottomAnimation[IS_MAKERS ? 'makers' : 'sopt']} />
        {IS_MAKERS
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
