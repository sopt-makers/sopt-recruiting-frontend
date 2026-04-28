import { type FieldValues, FormProvider, useForm } from 'react-hook-form';
import Button from '@components/Button';
import { InputLine, TextBox } from '@components/Input';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useMutateSignIn from 'views/SignInPage/hooks/useMutateSignIn';
import { buttonWrapper, formContainer, inputWrapperVar } from './style.css';
import { SignInErrorVariant } from 'views/SignInPage/types';
import SignInError from '../SignInError';

interface Props {
  onLoginBlocked: () => void;
}

const SIGN_IN_FAIL_WARNING_THRESHOLD = 5;

const SignInForm = ({ onLoginBlocked }: Props) => {
  const {
    recruitingInfo: { season, group, finalResultEnd },
  } = useRecruitingInfo();

  const methods = useForm({ mode: 'onBlur' });
  const { handleSubmit, setError } = methods;

  const { signInMutate, signInIsPending, signInError } = useMutateSignIn({
    finalResultEnd,
    onSetError: (name, type, message) => setError(name, { type, message }),
    onLoginBlocked,
  });

  const signInErrorVariant: SignInErrorVariant = (() => {
    if (!signInError) return null;
    if (signInError.status === 403) return 'mismatch';
    if (signInError.status === 401 && !signInError.data?.locked) {
      return (signInError.data?.loginFailCount ?? 0) >= SIGN_IN_FAIL_WARNING_THRESHOLD ? 'block-warning' : 'mismatch';
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
        {signInErrorVariant && <SignInError variant={signInErrorVariant} />}
        <div className={signInErrorVariant ? inputWrapperVar.withError : inputWrapperVar.withoutError}>
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
