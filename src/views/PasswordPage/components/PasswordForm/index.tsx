import { FormProvider, useForm, type FieldValues } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useVerificationStatus from '@hooks/useVerificationStatus';
import useMutateChangePassword from 'views/PasswordPage/hooks/useMutateChangePassword';

import { formWrapper } from './style.css';

import type { SeasonGroupType } from '@type/seasonAndGroup';

const PasswordForm = ({ season, group }: SeasonGroupType) => {
  const { isVerified, handleVerified } = useVerificationStatus();
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, setError } = methods;

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
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(handleChangePassword)} className={formWrapper}>
        <TextBox이름 />
        <TextBox이메일
          recruitingInfo={{ season, group }}
          isVerified={isVerified}
          onChangeVerification={handleVerified}
        />
        {isVerified && (
          <>
            <TextBox비밀번호 />
            <Button isLoading={changePasswordIsPending} type="submit" style={{ marginTop: 30 }}>
              저장하기
            </Button>
          </>
        )}
      </form>
    </FormProvider>
  );
};

export default PasswordForm;
