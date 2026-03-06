import Button from '@components/Button';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import Survey from './components/Survey';
import IconCheckmark from './icons/IconCheckmark';
import { container, iconVar, mainTextVar } from './style.css';

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

      <Button eventName="click-complete-my" onClick={handleClickMyPage}>
        마이페이지로 이동하기
      </Button>
      <Survey />
    </section>
  );
};

export default CompletePage;
