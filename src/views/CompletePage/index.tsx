import Button from '@components/Button';
import Callout from '@components/Callout';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import Survey from './components/Survey';
import IconCheckmark from './icons/IconCheckmark';
import { container, iconVar, mainTextVar, subTextVar } from './style.css';
import { IS_MAKERS } from '@constants/mode';

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
        }>{`${name}님의\n${season}기 ${IS_MAKERS ? soptName : group} 지원서가 접수되었습니다.`}</p>
      <p className={subTextVar[deviceType]}>이메일로 지원 접수 완료 알림이 발송되었습니다.</p>
      <Callout
        style={{
          marginBottom: 35,
        }}>{`이메일 도착 시점에 차이가 있을 수 있습니다.\n이메일이 오지 않으면 스팸 메일함을 확인해주세요.`}</Callout>
      <Button eventName="click-complete-my" onClick={handleClickMyPage}>
        마이페이지로 이동하기
      </Button>
      <Survey />
    </section>
  );
};

export default CompletePage;
