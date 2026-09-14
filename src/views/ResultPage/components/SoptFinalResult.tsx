import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import {
  finalResultBottomAnimation,
  container,
  contentWrapper,
  finalResultContent,
  finalResultImage,
  finalResultImageAsset,
  finalResultTitle,
  scrollBottomGrad,
  strongText,
  tabletBreak,
} from './style.css';

import IconSoptRecrutingLogo from 'views/ResultPage/assets/IconSoptRecrutingLogo';
import { useEffect } from 'react';
import useGetFinalResult from 'views/ResultPage/hooks/useGetFinalResult';
import BigLoading from 'views/loadings/BigLoding';

const Content = ({ pass }: { pass?: boolean }) => {
  const {
    recruitingInfo: { name, soptName, season, group },
  } = useRecruitingInfo();

  if (!name) return;

  const SOPT_NAME = `${soptName}`;
  const GROUP_NAME = group;

  return (
    <>
      {pass ? (
        <p className={finalResultContent}>
          <span>{`안녕하세요. ${season}기 ${SOPT_NAME}입니다.\n\n`}</span>

          <strong className={strongText({ brand: 'sopt' })}>{`축하드립니다!\n`}</strong>
          <span className="amp-mask">{`${name}님은 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에`}</span>
          <br className={tabletBreak} />
          <span>{` 최종 합격하셨습니다.\n\n`}</span>

          <span className="amp-mask">{`${name}님과 ${season}기 ${SOPT_NAME}를 함께하게 되어`}</span>
          <br className={tabletBreak} />
          <span className="amp-mask">{` 진심으로 기쁩니다.\n\n`}</span>

          <span className="amp-mask">{`향후 활동은 ${SOPT_NAME} 공식 노션과 카카오톡`}</span>
          <br className={tabletBreak} />
          <span className="amp-mask">{` 단체 대화방, 디스코드를 통해 운영 및 진행됩니다.\n`}</span>
          <span className="amp-mask">{`오늘 중으로 카카오톡 단체 대화방에 초대해드릴`}</span>
          <br className={tabletBreak} />
          <span className="amp-mask">{` 예정입니다.\n\n`}</span>

          <span className="amp-mask">{`SOPT의 ${season}번째 열정이 되신 것을 축하드립니다!`}</span>
        </p>
      ) : (
        <p className={`amp-mask ${finalResultContent}`}>
          {`안녕하세요. ${season}기 ${SOPT_NAME}입니다.

          먼저 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 관심을 가지고
          합류 여정을 함께해 주셔서 감사하다는 말씀을 드립니다.

          ${name}님은 ${season}기 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고
          안타깝게도 귀하의 최종 합격 소식을 전해드리지 못하게 되었습니다.

          저희 SOPT에 지원하셨던 경험이 IT 창업인으로서
          멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.

          감사합니다.
          `}
        </p>
      )}
    </>
  );
};

const SoptFinalResult = () => {
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
    <section className={container}>
      <div style={{ overflow: 'auto' }}>
        <div className={contentWrapper({ deviceType })}>
          <h1 className={finalResultTitle}>결과 확인</h1>
          <Content pass={pass} />
        </div>
      </div>
      {pass && (
        <div className={finalResultImage}>
          <IconSoptRecrutingLogo deviceType={deviceType} className={finalResultImageAsset} />
        </div>
      )}
      {pass && <div className={finalResultBottomAnimation} />}
      <div className={scrollBottomGrad({ deviceType })} />
    </section>
  );
};

export default SoptFinalResult;
