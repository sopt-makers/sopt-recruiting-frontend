import { useMutation } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import { Description, InputLine, TextBox } from '@components/Input';
import Title from '@components/Title';
import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendingSignIn } from './apis';
import { calloutButton, calloutWrapper, container } from './style.css';

import type { SignInError, SignInRequest, SignInResponse } from './types';
import type { AxiosError, AxiosResponse } from 'axios';

const SignInPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const { mutate, isPending } = useMutation<
    AxiosResponse<SignInResponse, SignInRequest>,
    AxiosError<SignInError, SignInRequest>,
    SignInRequest
  >({
    mutationFn: (userInfo: SignInRequest) => sendingSignIn(userInfo),
    onSuccess: (data) => {
      localStorage.setItem('soptApplyAccessToken', data.data.token);
      navigate(0);
    },
    onError(error) {
      if (error.response?.status === 403 || error.response?.status === 500) {
        formObject.setError('이메일', {
          type: 'not-match',
          message: VALIDATION_CHECK.email.notMatchErrorText,
        });
        formObject.setError('비밀번호', {
          type: 'not-match',
          message: VALIDATION_CHECK.password.notMatchErrorText,
        });
      }
    },
  });

  const handleSignIn = (data: FieldValues) => {
    mutate({
      email: data['이메일'],
      season: 1,
      group: 'OB',
      password: data['비밀번호'],
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSignIn)} className={container}>
      <Title>지원하기</Title>
      <Callout>
        <div className={calloutWrapper}>
          <p>
            35기 지원서 작성이 처음이라면 ‘새 지원서 작성 하기’를 진행해주세요. 이전 기수 지원서를 제출한 적이 있더라도
            새 지원서를 작성해야 해요.
          </p>
          <Link to="/sign-up" className={calloutButton}>
            새 지원서 작성하기
          </Link>
        </div>
      </Callout>
      <TextBox label="이메일" formObject={formObject} required>
        <InputLine label="이메일" placeholder="이메일을 입력해주세요" type="email" />
      </TextBox>
      <TextBox label="비밀번호" formObject={formObject} required>
        <InputLine label="비밀번호" placeholder="비밀번호를 입력해주세요" type="password" />
        <Description>
          <p>비밀번호를 잃어버리셨나요?</p>
          <Link to="/password">비밀번호 재설정하기</Link>
        </Description>
      </TextBox>
      <Button isLoading={isPending} type="submit">
        로그인
      </Button>
    </form>
  );
};

export default SignInPage;
