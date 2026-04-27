import { VALIDATION_CHECK } from '@constants/validationCheck';

import { container, contactButton, messageVar } from './style.css';
import { LoginErrorVariant } from 'views/SignInPage/types';

interface LoginErrorSectionProps {
  variant: LoginErrorVariant;
}

const LoginErrorSection = ({ variant }: LoginErrorSectionProps) => {
  const handleContactSupport = () => {
    window.open('mailto:manager@sopt.org', '_blank');
  };

  if (variant === 'login-block-warning') {
    return (
      <div className={container}>
        <p className={messageVar}>
          {`로그인에 5회 이상 실패했습니다. 10회 실패 시 로그인이 제한되니,\n이메일이나 비밀번호가 기억나지 않는다면 문의해 주세요.`}
        </p>
        <button type="button" className={contactButton} onClick={handleContactSupport}>
          문의하기
        </button>
      </div>
    );
  }

  return (
    <div className={container}>
      <p className={messageVar}>{VALIDATION_CHECK.email.notMatchErrorText}</p>
    </div>
  );
};

export default LoginErrorSection;
