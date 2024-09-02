import { track } from '@amplitude/analytics-browser';
import { lazy, useEffect, useRef } from 'react';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/components/Contentbox';
import { InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/components/InputTheme';
import { PRIVACY_POLICY } from '@constants/policy';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useVerificationStatus from '@hooks/useVerificationStatus';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useMutateSignUp from 'views/SignupPage/hooks/useMutateSignUp';

import { formWrapper } from './style.css';

const ExistingApplicantDialog = lazy(() =>
  import('views/dialogs').then(({ ExistingApplicantDialog }) => ({ default: ExistingApplicantDialog })),
);

const SignupForm = () => {
  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();
  const existingApplicantRef = useRef<HTMLDialogElement>(null);

  const { isVerified, handleVerified } = useVerificationStatus();
  const methods = useForm({ mode: 'onBlur' });
  const {
    handleSubmit,
    setError,
    setFocus,
    formState: { errors },
  } = methods;
  const { signUpMutate, signUpIsPending } = useMutateSignUp({
    onCheckExistence: () => existingApplicantRef.current?.showModal(),
  });

  const handleSubmitSignUp = ({ email, password, passwordCheck, name, phone }: FieldValues) => {
    if (!isVerified) {
      setError('code', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }

    if (!season || !group) return;

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

  useEffect(() => {
    if (errors.email?.message === VALIDATION_CHECK.email.errorTextExistence) {
      setFocus('email');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.email?.message, setFocus]);

  return (
    <>
      <ExistingApplicantDialog ref={existingApplicantRef} />
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
          <TextBox이메일
            recruitingInfo={{ season, group }}
            isVerified={isVerified}
            onChangeVerification={handleVerified}
          />
          <TextBox비밀번호 />
          <div>
            <Checkbox required name="personalInformation">
              개인정보 수집 ‧ 이용에 동의합니다.
            </Checkbox>
            <Contentbox>{PRIVACY_POLICY}</Contentbox>
          </div>
          <Button
            isLoading={signUpIsPending}
            type="submit"
            style={{ marginTop: 30 }}
            onClick={() => track('click-signup-apply')}>
            지원서 작성하기
          </Button>
        </form>
      </FormProvider>
    </>
  );
};

export default SignupForm;
