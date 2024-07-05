import { FieldValues, useForm } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import { VALIDATION_CHECK } from '@constants/VALIDATION_CHECK';
import useVerificationStatus from '@hooks/useVerificationStatus';

import { container } from './style.css';

const PasswordPage = () => {
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm(); // 임시

  const handleChangePassword = (data: FieldValues) => {
    if (!isVerified) {
      formObject.setError('인증번호', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleChangePassword)} className={container}>
      <Title>비밀번호 재설정하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox이메일 isVerified={isVerified} onChangeVerification={handleVerified} formObject={formObject} />
      <TextBox비밀번호 formObject={formObject} />
      <Button type="submit" style={{ marginTop: 30 }}>
        저장하기
      </Button>
    </form>
  );
};

export default PasswordPage;
