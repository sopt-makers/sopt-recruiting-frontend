import Button from '@components/Button';
import Callout from '@components/Callout';

import IconCheckmark from './icons/IconCheckmark';
import { container, icon, mainText, subText } from './style.css';

const CompletePage = () => {
  const name = '000';
  const th = '00';

  return (
    <section className={container}>
      <div className={icon}>
        <IconCheckmark />
      </div>
      <p className={mainText}>{`${name}님의\n${th}기 지원서가 접수되었습니다.`}</p>
      <p className={subText}>이메일로 지원 접수 완료 알림이 발송되었습니다.</p>
      <Callout
        style={{
          marginBottom: '50px',
        }}>{`이메일 도착 시점에 차이가 있을 수 있습니다.\n이메일이 오지 않으면 스팸 메일함을 확인해주세요.`}</Callout>
      <Button>마이페이지로 이동하기</Button>
    </section>
  );
};

export default CompletePage;
