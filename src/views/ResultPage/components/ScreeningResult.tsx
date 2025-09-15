import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

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
import IconMakersLogo from '../assets/IconMakersLogo';
import useGetScreeningResult from 'views/ResultPage/hooks/useGetScreeningResult';
import { useEffect } from 'react';
import BigLoading from 'views/loadings/BigLoding';
import { format } from '@utils/dateFormatter';
import IconSoptRecrutingLogo from 'views/ResultPage/assets/IconSoptRecrutingLogo';

const MOBILE_HEADER_HEIGHT = 73;
const DESKTOP_HEADER_HEIGHT = 79;

const Content = ({ pass }: { pass?: boolean }) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, group, soptName, season, interviewStart, interviewEnd, applicationResultStart },
  } = useRecruitingInfo();

  if (!name) return;

  const applicationDate = new Date(applicationResultStart || '');
  const applicationPassConfirmNextDay = new Date(applicationDate);
  applicationPassConfirmNextDay.setDate(applicationDate.getDate() + 1);

  const formattedInterviewStartWithDay = format(new Date(interviewStart || ''), 'M/dd (E)');
  const formattedInterviewEndWithDay = format(new Date(interviewEnd || ''), 'M/dd (E)');

  const SOPT_NAME = __IS_MAKERS__ ? `SOPT makers` : `${season}기 ${soptName}`;
  const GROUP_NAME = __IS_MAKERS__ ? 'SOPT makers' : group;

  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>{`안녕하세요. ${SOPT_NAME}입니다.\n\n`}</span>
          <strong className={strongText[__IS_MAKERS__ ? 'makers' : 'sopt']}>{`축하드립니다!`}</strong>
          <span className="amp-mask">
            {`
            서류 검토 결과,
            ${name}님은 면접 대상자로 선정되셨습니다.\n
            `}
          </span>
          <span className="amp-mask">{`${season}기 ${GROUP_NAME} 면접은 `}</span>
          <span>{formattedInterviewStartWithDay + ' ~ ' + formattedInterviewEndWithDay + ' 양일 간'}</span>
          <span className="amp-mask">
            {`
            오프라인으로 진행될 예정입니다.\n
            `}
          </span>
          <span className="amp-mask">{`모든 면접 대상자 분들을 대상으로 면접 가능 시간을 조사 하려 합니다. 아래 구글폼을 금일 20시 (9월 18일 목요일 오후 8시) 까지 제출해주세요.\n`}</span>
          <a
            style={{ textDecoration: 'underline' }}
            href={`https://${import.meta.env.VITE_SCREENING_PASS_LINK}`}
            target="_blank"
            rel="noreferrer noopener">{`https:/${import.meta.env.VITE_SCREENING_PASS_LINK})\n`}</a>
          <span>
            {`
            면접 안내 사항 및 폼 제출 내용을 기반으로 한 면접 시간표를 내일 (19일 금요일) 오후 12시 전으로 이메일을 통해 전해드리겠습니다.

            다시 한 번 진심으로 축하드리며, 
            면접에서 뵙도록 하겠습니다:)
            `}
          </span>
        </p>
      ) : (
        <p className={`amp-mask ${contentVar[deviceType]}`} style={{ wordBreak: 'keep-all' }}>
          {`안녕하세요. ${SOPT_NAME}입니다.

          먼저 ${SOPT_NAME} ${GROUP_NAME}회원 모집에 관심을 가지고 합류 여정을 함께해주셔서 감사하다는 말씀을 드립니다.

          ${name}님은 ${SOPT_NAME} 신입회원 모집에 불합격하셨습니다.

          지원자님의 뛰어난 역량과 잠재력에도 불구하고
          안타깝게도 귀하의 서류 합격 소식을 전해드리지 못하게 되었습니다.

          한 분 한 분에게 개별적인 피드백을 드리기는 어렵겠으나
          저희 SOPT에 지원하셨던 경험이 IT 창업인으로서 멋진 역할을 해나가시는 데 큰 도움이 되기를 바랍니다.  

          감사합니다.
          `}
        </p>
      )}
    </>
  );
};

const ScreeningResult = () => {
  const { deviceType } = useDeviceType();
  const { handleSaveRecruitingInfo } = useRecruitingInfo();
  const { screeningResult, screeningResultIsLoading } = useGetScreeningResult();

  const { name, interviewStart, interviewEnd, pass, season } = screeningResult?.data || {};

  useEffect(() => {
    handleSaveRecruitingInfo({
      name,
      interviewStart,
      interviewEnd,
      season,
    });
  }, [name, interviewStart, interviewEnd, season, handleSaveRecruitingInfo]);

  if (screeningResultIsLoading) return <BigLoading />;

  return (
    <section className={container}>
      <div
        style={{
          overflow: 'auto',
          height: `calc(100dvh - ${deviceType === 'MOB' ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT}px)`,
          wordBreak: 'keep-all',
        }}>
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

export default ScreeningResult;
