import Button from '@components/Button';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import Survey from './components/Survey';
import IconCheckmark from './icons/IconCheckmark';
import { container, iconVar, mainTextVar, subTextVar, buttonWrapperVar } from './style.css';
import Callout from '@components/Callout';

const CompletePage = () => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, season, group, soptName },
  } = useRecruitingInfo();

  const handleClickMyPage = () => {
    window.location.reload();
  };

  return (
    <section className={container}>
      <div className={iconVar[deviceType]}>
        <IconCheckmark />
      </div>
      <p
        className={
          mainTextVar[deviceType]
        }>{`${name}님의\n${season}기 ${__IS_MAKERS__ ? soptName : group} 지원서가 접수되었습니다.`}</p>
      <p className={subTextVar[deviceType]}>
        {/* TODO: 서류 결과일 변수 변경 */}
        {`이메일로 지원 접수 완료 알림이 발송되었습니다.\n
        서류 결과는 2026/03/18에 발표됩니다.`}
      </p>

      <Callout>
        메일 도착 시점이 다를 수 있으니, 메일이 확인되지 않는 경우 스팸 메일함을 확인해 주시기 바랍니다.
      </Callout>
      <div className={buttonWrapperVar[deviceType]}>
        <Button eventName="click-complete-my" onClick={handleClickMyPage}>
          마이페이지로 이동하기
        </Button>
      </div>
      <Survey />
    </section>
  );
};

export default CompletePage;
