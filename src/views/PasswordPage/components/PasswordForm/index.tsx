import { track } from '@amplitude/analytics-browser';
import { lazy } from 'react';
import { FormProvider, useForm, type FieldValues } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/components/InputTheme';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useVerificationStatus from '@hooks/useVerificationStatus';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useMutateChangePassword from 'views/PasswordPage/hooks/useMutateChangePassword';

import { formWrapper } from './style.css';
import useDialog from '@hooks/useDialog';

const CompleteDialog = lazy(() => import('views/dialogs').then(({ CompleteDialog }) => ({ default: CompleteDialog })));

const PasswordForm = () => {
  const { ref: completeDialogRef, handleShowDialog: handleShowCompleteDialog } = useDialog();

  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();
  const { isVerified, handleVerified } = useVerificationStatus();
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, setError } = methods;

  const handleCompleteChangePassword = () => {
    handleShowCompleteDialog();
  };

  const { changePasswordMutate, changePasswordIsPending } = useMutateChangePassword({
    onSuccess: handleCompleteChangePassword,
  });

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
    <>
      <CompleteDialog ref={completeDialogRef} />
      <FormProvider {...methods}>
        <form
          id="password-form"
          name="password-form"
          noValidate
          onSubmit={handleSubmit(handleChangePassword)}
          className={formWrapper}>
          <TextBox이름 />
          <TextBox이메일
            recruitingInfo={{ season, group }}
            isVerified={isVerified}
            onChangeVerification={handleVerified}
          />
          {isVerified && (
            <>
              <TextBox비밀번호 />
              <Button
                isLoading={changePasswordIsPending}
                type="submit"
                style={{ marginTop: 30 }}
                onClick={() => track('click-password-password')}>
                저장하기
              </Button>
            </>
          )}
        </form>
      </FormProvider>
    </>
  );
};

export default PasswordForm;
