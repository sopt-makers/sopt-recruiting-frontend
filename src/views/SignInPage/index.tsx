import { useContext } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import { Description, InputLine, TextBox } from '@components/Input';
import Title from '@components/Title';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import useMutateSignIn from './hooks/useMutateSignIn';
import { calloutButton, container, newPasswordButton, strongText } from './style.css';

const SignInPage = () => {
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const { setError } = formObject;
  const {
    recruitingInfo: { season, group },
  } = useContext(RecruitingInfoContext);

  const { signInMutate, signInIsPending } = useMutateSignIn({
    onSetError: (name, type, message) => setError(name, { type, message }),
  });

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
    <form noValidate onSubmit={handleSubmit(handleSignIn)} className={container}>
      <Title>{season}기 Makers 지원하기</Title>
      <Callout
        Button={
          <Link to="/sign-up" className={calloutButton}>
            새 지원서 작성하기
          </Link>
        }>
        <p>
          {season}기 Makers 지원서 작성이 처음이라면 ‘새 지원서 작성하기’를 진행해주세요.{' '}
          <strong className={strongText}>이전에 지원서 </strong>를 제출한 적이 있더라도{' '}
          <strong className={strongText}>반드시</strong> 새 지원서를 작성해야 해요.
        </p>
      </Callout>
      <TextBox label="이메일" name="email" formObject={formObject} required>
        <InputLine
          name="email"
          placeholder="이메일을 입력해주세요"
          type="email"
          pattern={VALIDATION_CHECK.email.pattern}
          maxLength={VALIDATION_CHECK.email.maxLength}
          errorText={VALIDATION_CHECK.email.errorText}
        />
      </TextBox>
      <TextBox label="비밀번호" name="password" formObject={formObject} required>
        <InputLine
          name="password"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          pattern={VALIDATION_CHECK.password.pattern}
          maxLength={VALIDATION_CHECK.password.maxLength}
          errorText={VALIDATION_CHECK.password.errorText}
        />
        <Description>
          <p>비밀번호를 잃어버리셨나요?</p>
          <Link className={newPasswordButton} to="/password">
            비밀번호 재설정하기
          </Link>
        </Description>
      </TextBox>
      <Button isLoading={signInIsPending} type="submit">
        로그인
      </Button>
    </form>
  );
};

export default SignInPage;
