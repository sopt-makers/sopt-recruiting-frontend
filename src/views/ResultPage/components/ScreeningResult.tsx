
import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import {
  bottomAnimation,
  bottomSvg,
  container,
  contentVar,
  contentWrapperVar, scrollBottomGradVar,
  strongText
} from './style.css';
import IconMakersLogo from '../assets/IconMakersLogo';
import { format } from '@utils/dateFormatter';
import useGetScreeningResult from 'views/ResultPage/hooks/useGetScreeningResult';
import { useEffect } from 'react';
import BigLoading from 'views/loadings/BigLoding';

const MOBILE_HEADER_HEIGHT = 73;
const DESKTOP_HEADER_HEIGHT = 79;

const Content = ({ pass }: { pass?: boolean }) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: {
      name,
      group,
      soptName,
      season,
      interviewStart,
      interviewEnd,
      applicationResultStart,
    },
  } = useRecruitingInfo();

  const isMakers = import.meta.env.MODE === 'makers';

  if (!name) return;

  const applicationDate = new Date(applicationResultStart || '');
  const applicationPassConfirmNextDay = new Date(applicationDate);
  applicationPassConfirmNextDay.setDate(applicationDate.getDate() + 1);

  const formattedInterviewStart = format(new Date(interviewStart || ''), 'M월 dd일');
  const formattedInterviewEnd = format(new Date(interviewEnd || ''), 'M월 dd일');
  // const formattedApplicationPassConfirmStart = format(applicationDate, 'M월 dd일 E');
  // const formattedApplicationPassConfirmNextDay = format(new Date(applicationPassConfirmNextDay || ''), 'M월 dd일');

  const SOPT_NAME = isMakers ? `SOPT makers` : `${season}기 ${soptName}`;
  const GROUP_NAME = isMakers ? 'SOPT makers' : group;

  return (
    <>
      {pass ? (
        <p className={contentVar[deviceType]}>
          <span>{`안녕하세요. ${SOPT_NAME} 입니다.\n\n`}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`축하드립니다!\n`}</strong>
          <span className="amp-mask">
            {`서류 검토 결과, ${name}님은 인터뷰 대상자로 선정되셨습니다.\n\n`}
          </span>
          <span className="amp-mask">{`${season}기 ${GROUP_NAME} 인터뷰는 `}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`${formattedInterviewStart} ~ ${formattedInterviewEnd}`}</strong>
          <span className="amp-mask">{` 기간 중 진행될 예정입니다.\n\n`}</span>
          <span className="amp-mask">{`원할한 면접 진행을 위해, 아래 구글 폼에 `}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`불가능한 시간대를 모두 선택`}</strong>
          <span className="amp-mask">{`해 제출 부탁드립니다.\n`}</span>
          <span className="amp-mask">{`(제출 마감 : `}</span>
          <strong className={strongText[isMakers ? 'makers' : 'sopt']}>{`8월 20일 수요일 오후 8시`}</strong>
          <span> {`)\n`}</span>
          <span>{`(구글폼 : `}</span>
          <a style={{textDecoration: 'underline'}} href={`https://${import.meta.env.VITE_SCREENING_PASS_LINK}`} target="_blank" rel="noreferrer noopener">{`https:/${import.meta.env.VITE_SCREENING_PASS_LINK})\n`}</a>
          <span>
            {`
            제출해주신 폼 내용을 기반으로 확정된 면접 일정 및 면접 안내를 내일(8월 21일) 오후 12시 전으로 이메일을 통해 공유드리겠습니다. 

            다시 한 번 진심으로 축하드리며, 인터뷰에서 뵙겠습니다!

            문의 사항 및 궁금한 점은 아래 연락처로 문의 부탁드립니다.
            김가연 : 010-9477-0304
            
            감사합니다.
            `}
          </span>
        </p>
      ) : (
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
      )}
    </>
  );
};

const ScreeningResult = () => {
  const { deviceType } = useDeviceType();
  const { handleSaveRecruitingInfo } = useRecruitingInfo();
  const { screeningResult, screeningResultIsLoading } = useGetScreeningResult();
  const isMakers = import.meta.env.MODE === 'makers';

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
      <div style={{ overflow: 'auto', height: `calc(100dvh - ${deviceType === 'MOB' ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT}px)` }}>
        <div className={contentWrapperVar[deviceType]}>
          <Title>결과 확인</Title>
          <Content pass={pass} />
        </div>
      </div>
      {deviceType !== 'MOB' && isMakers && (
        <>
          <div className={bottomAnimation[isMakers ? 'makers' : 'sopt']} />
          {isMakers && (
            <i className={bottomSvg}>
              <IconMakersLogo />
            </i>
          )}
        </>
      )}
      <div className={scrollBottomGradVar[deviceType]} />
    </section>
  );
};

export default ScreeningResult;
