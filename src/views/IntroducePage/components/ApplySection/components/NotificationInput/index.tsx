import { wrapper, inputVar, buttonVar, gradientWrapper } from './style.css';
import { Button, useToast } from '@sopt-makers/ui';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { FormEvent, useState } from 'react';
import useMutateNotificationEmail from 'views/IntroducePage/hooks/useMutateNotificationEmail';

const NotificationInput = () => {
  const [email, setEmail] = useState('');

  const {
    recruitingInfo: { season },
  } = useRecruitingInfo();

  const { mutate } = useMutateNotificationEmail();

  const { open: showToast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !season) {
      return;
    }

    mutate(
      { email, generation: season },
      {
        onSuccess: () => {
          showToast({
            content: '알림 신청이 완료되었습니다.',
            icon: 'success',
          });
        },
        onError: (error) => {
          const status = error.response?.status;

          if (status === 409) {
            showToast({
              content: '이미 등록된 알림입니다.',
              icon: 'error',
            });
          } else {
            showToast({
              content: error.message,
              icon: 'error',
            });
          }
        },
      },
    );
  };

  return (
    <div className={gradientWrapper}>
      <form className={wrapper} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="메일을 입력해주세요."
          className={inputVar}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button theme="blue" rounded="lg" className={buttonVar} type="submit">
          알림 신청하기
        </Button>
      </form>
    </div>
  );
};

export default NotificationInput;
