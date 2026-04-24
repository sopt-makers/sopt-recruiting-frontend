import { wrapper, inputVar, buttonVar, gradientWrapper } from './style.css';
import { Button } from '@sopt-makers/ui';
import { ChangeEvent, useCallback, useState } from 'react';

const NotificationInput = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!email) {
      return;
    }
    // TODO: 알림 신청 API 호출
  }, [email]);

  return (
    <div className={gradientWrapper}>
      <form className={wrapper} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="메일을 입력해주세요."
          className={inputVar}
          value={email}
          onChange={handleEmailChange}
        />
        <Button theme="blue" rounded="lg" className={buttonVar} type="submit">
          알림 신청하기
        </Button>
      </form>
    </div>
  );
};

export default NotificationInput;
