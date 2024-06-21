import { IconCheck } from '@sopt-makers/icons';

import Button from '@components/Button';
import Callout from '@components/Callout';

const CompletePage = () => {
  const name = '000';
  const th = '00';

  return (
    <section>
      <div>
        <IconCheck color="white" />
      </div>
      <p>{`${name}님의\n${th}기 지원서가 접수되었습니다.`}</p>
      <p>이메일로 지원 접수 완료 알림이 발송되었습니다.</p>
      <Callout>{`이메일 도착 시점에 차이가 있을 수 있습니다.\n이메일이 오지 않으면 스팸 메일함을 확인해주세요.`}</Callout>
      <Button>마이페이지로 이동하기</Button>
    </section>
  );
};

export default CompletePage;
