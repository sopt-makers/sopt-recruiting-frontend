import Button from '@components/Button';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { format } from '@utils/dateFormatter';

import Survey from './components/Survey';
import IconCheckmark from './icons/IconCheckmark';
import { container, icon, mainText, subText, buttonWrapper, calloutWrapper } from './style.css';
import Callout from '@components/Callout';

const CompletePage = () => {
  const {
    recruitingInfo: { name, season, group, soptName, applicationResultStart },
  } = useRecruitingInfo();

  const formattedApplicationResultStart = applicationResultStart
    ? format(applicationResultStart, 'YYYY/MM/dd')
    : '';

  const handleClickMyPage = () => {
    window.location.reload();
  };

  return (
    <section className={container}>
      <div className={icon}>
        <IconCheckmark />
      </div>
      <p
        className={
          mainText
        }>{`${name}님의\n${season}기 ${__IS_MAKERS__ ? soptName : group} 지원서가 접수되었습니다.`}</p>
      <p className={subText}>
        {`이메일로 지원 접수 완료 알림이 발송되었습니다.\n
        서류 결과는 ${formattedApplicationResultStart}에 발표됩니다.`}
      </p>

      <div className={calloutWrapper}>
        <Callout>
          메일 도착 시점이 다를 수 있으니, 메일이 확인되지 않는 경우 스팸 메일함을 확인해 주시기 바랍니다.
        </Callout>
      </div>
      <div className={buttonWrapper}>
        <Button eventName="click-complete-my" onClick={handleClickMyPage}>
          마이페이지로 이동하기
        </Button>
      </div>
      <Survey />
    </section>
  );
};

export default CompletePage;
