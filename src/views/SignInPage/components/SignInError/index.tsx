import { VALIDATION_CHECK } from '@constants/validationCheck';

import { container, contactButton, messageVar } from './style.css';
import { SignInErrorVariant } from 'views/SignInPage/types';
import { 문의메일열기 } from '@utils/support';

interface Props {
  variant: SignInErrorVariant;
}

const SignInError = ({ variant }: Props) => {
  if (variant === 'LOCK_WARNING') {
    return (
      <div className={container}>
        <p className={messageVar}>
          {`로그인에 5회 이상 실패했습니다. 10회 실패 시 로그인이 제한되니,\n이메일이나 비밀번호가 기억나지 않는다면 문의해 주세요.`}
        </p>
        <button type="button" className={contactButton} onClick={문의메일열기}>
          문의하기
        </button>
      </div>
    );
  }

  if (variant === 'ACCOUNT_NOT_FOUND') {
    return (
      <div className={container}>
        <p className={messageVar}>{VALIDATION_CHECK.email.errorTextNonexistence}</p>
      </div>
    );
  }

  return (
    <div className={container}>
      <p className={messageVar}>{VALIDATION_CHECK.email.notMatchErrorText}</p>
    </div>
  );
};

export default SignInError;
