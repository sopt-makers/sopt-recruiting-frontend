import { useForm, type FieldValues } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useVerificationStatus from '@hooks/useVerificationStatus';
import useMutateChangePassword from 'views/PasswordPage/hooks/useMutateChangePassword';

import { formWrapper } from './style.css';

interface PasswordFormProps {
  season?: number;
  group?: string;
}

const PasswordForm = ({ season, group }: PasswordFormProps) => {
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const { setError } = formObject;

  const { changePasswordMutate, changePasswordIsPending } = useMutateChangePassword();

  const handleChangePassword = ({ email, newPassword: password, passwordCheck }: FieldValues) => {
    if (!isVerified) {
      setError('code', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }

    if (!season || !group) return;

    changePasswordMutate({
      email,
      password,
      passwordCheck,
      season,
      group,
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleChangePassword)} className={formWrapper}>
      <TextBox이름 formObject={formObject} />
      <TextBox이메일
        recruitingInfo={{ season, group }}
        isVerified={isVerified}
        onChangeVerification={handleVerified}
        formObject={formObject}
      />
      {isVerified && (
        <>
          <TextBox비밀번호 formObject={formObject} />
          <Button isLoading={changePasswordIsPending} type="submit" style={{ marginTop: 30 }}>
            저장하기
          </Button>
        </>
      )}
    </form>
  );
};

export default PasswordForm;
