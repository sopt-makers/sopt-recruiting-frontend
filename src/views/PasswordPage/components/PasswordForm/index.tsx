import { lazy } from 'react';
import { FormProvider, useForm, type FieldValues } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/components/InputTheme';
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
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit } = methods;

  const handleCompleteChangePassword = () => {
    handleShowCompleteDialog();
  };

  const { changePasswordMutate, changePasswordIsPending } = useMutateChangePassword({
    onSuccess: handleCompleteChangePassword,
  });

  const handleChangePassword = ({ email, newPassword: password, passwordCheck }: FieldValues) => {
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
          <TextBox이메일 />
          <TextBox비밀번호 />
          <Button
            isLoading={changePasswordIsPending}
            type="submit"
            style={{ marginTop: 30 }}
            eventName="click-password-password">
            저장하기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default PasswordForm;
