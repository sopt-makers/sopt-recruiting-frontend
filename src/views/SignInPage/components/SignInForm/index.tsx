import { type FieldValues, FormProvider, useForm } from 'react-hook-form';
import Button from '@components/Button';
import { InputLine, TextBox } from '@components/Input';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { LOGIN_FAIL_WARNING_THRESHOLD } from 'views/SignInPage/constants';
import useMutateSignIn from 'views/SignInPage/hooks/useMutateSignIn';
import LoginErrorSection from '../LoginErrorSection';
import { buttonWrapper, formContainer, inputWrapperVar } from './style.css';
import { LoginErrorVariant } from 'views/SignInPage/types';

const SignInForm = ({ onShowLoginBlockedDialog }: { onShowLoginBlockedDialog: () => void }) => {
  const {
    recruitingInfo: { season, group, finalResultEnd },
  } = useRecruitingInfo();
  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, setError } = methods;
  const { signInMutate, signInIsPending, signInError } = useMutateSignIn({
    finalResultEnd,
    onSetError: (name, type, message) => setError(name, { type, message }),
    onLoginBlocked: onShowLoginBlockedDialog,
  });

  const loginErrorVariant: LoginErrorVariant | null = (() => {
    if (!signInError) return null;
    if (signInError.status === 403) return 'not-match';
    if (signInError.status === 401 && !signInError.data?.locked) {
      return (signInError.data?.loginFailCount ?? 0) >= LOGIN_FAIL_WARNING_THRESHOLD
        ? 'login-block-warning'
        : 'not-match';
    }
    return null;
  })();

  const handleSignIn = ({ email, password }: FieldValues) => {
    if (!season || !group) return;

    signInMutate({
      email,
      password,
      season,
      group,
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        id="sign-in-form"
        name="sign-in-form"
        noValidate
        onSubmit={handleSubmit(handleSignIn)}
        className={formContainer}>
        {loginErrorVariant && <LoginErrorSection variant={loginErrorVariant} />}
        <div className={loginErrorVariant ? inputWrapperVar.withError : inputWrapperVar.withoutError}>
          <TextBox label="이메일" name="email" required>
            <InputLine
              name="email"
              placeholder="이메일을 입력해주세요"
              type="email"
              pattern={VALIDATION_CHECK.email.pattern}
              maxLength={VALIDATION_CHECK.email.maxLength}
              errorText={VALIDATION_CHECK.email.errorText}
            />
          </TextBox>
          <TextBox label="비밀번호" name="password" required>
            <InputLine
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              pattern={VALIDATION_CHECK.password.pattern}
              maxLength={VALIDATION_CHECK.password.maxLength}
              errorText={VALIDATION_CHECK.password.errorText}
            />
            {/* <Description>
              <p>비밀번호를 잃어버리셨나요?</p>
              <AmplitudeEventTrack eventName="click-signin-password">
                <Link className={newPasswordButton} to="/password">
                  비밀번호 재설정하기
                </Link>
              </AmplitudeEventTrack>
            </Description> */}
          </TextBox>
          <div className={buttonWrapper}>
            <Button isLoading={signInIsPending} type="submit" eventName="click-signin-signin">
              로그인
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignInForm;
