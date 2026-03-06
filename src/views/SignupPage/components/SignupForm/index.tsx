import { lazy } from 'react';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/components/Contentbox';
import { InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/components/InputTheme';
import { PRIVACY_POLICY } from '@constants/policy';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useMutateSignUp from 'views/SignupPage/hooks/useMutateSignUp';

import { formWrapper } from './style.css';
import useDialog from '@hooks/useDialog';

const ExistingApplicantDialog = lazy(() =>
  import('views/dialogs').then(({ ExistingApplicantDialog }) => ({ default: ExistingApplicantDialog })),
);

const SignupForm = () => {
  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();
  const { ref: existingApplicantDialogRef, handleShowDialog: handleShowExistingApplicantDialog } = useDialog();

  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit } = methods;
  const { signUpMutate, signUpIsPending } = useMutateSignUp({
    onCheckExistence: () => handleShowExistingApplicantDialog(),
  });

  const handleSubmitSignUp = ({ email, password, passwordCheck, name, phone }: FieldValues) => {
    if (!season || !group) {
      return;
    };

    signUpMutate({
      email,
      password,
      passwordCheck,
      name,
      phone,
      season,
      group,
    });
  };

  return (
    <>
      <ExistingApplicantDialog ref={existingApplicantDialogRef} />
      <FormProvider {...methods}>
        <form
          id="sign-up-form"
          name="sign-up-form"
          noValidate
          onSubmit={handleSubmit(handleSubmitSignUp)}
          className={formWrapper}>
          <TextBox이름 />
          <TextBox label="연락처" name="phone" required>
            <InputLine
              name="phone"
              placeholder="010-0000-0000"
              type="tel"
              pattern={VALIDATION_CHECK.phoneNumber.pattern}
              maxLength={VALIDATION_CHECK.phoneNumber.maxLength}
              errorText={VALIDATION_CHECK.phoneNumber.errorText}
            />
          </TextBox>
          <TextBox이메일 />
          <TextBox비밀번호 />
          <div>
            <Checkbox required name="personalInformation">
              개인정보 수집 ‧ 이용에 동의합니다.
            </Checkbox>
            <Contentbox>{PRIVACY_POLICY}</Contentbox>
          </div>
          <Button isLoading={signUpIsPending} type="submit" style={{ marginTop: 30 }} eventName="click-signup-apply">
            지원서 작성하기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SignupForm;
