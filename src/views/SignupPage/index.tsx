import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import { InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import { PRIVACY_POLICY } from '@constants/policy';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useGetRecruitingInfo } from '@hooks/use';
import useVerificationStatus from '@hooks/useVerificationStatus';
import BigLoading from 'views/loadings/BigLoding';

import { sendingSignUp } from './apis';
import { container } from './style.css';
import { SignUpError, SignUpRequest, SignUpResponse } from './types';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' }); // 임시
  const {
    setError,
    setFocus,
    formState: { errors },
  } = formObject;

  const { data, isLoading } = useGetRecruitingInfo();
  const { season, group } = data?.data.season || {};

  const { mutate, isPending } = useMutation<
    AxiosResponse<SignUpResponse, SignUpRequest>,
    AxiosError<SignUpError, SignUpRequest>,
    SignUpRequest
  >({
    mutationFn: (userInfo: SignUpRequest) => sendingSignUp(userInfo),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        setError('email', {
          type: 'already-existence',
          message: VALIDATION_CHECK.email.errorTextExistence,
        });
      }
    },
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

    mutate({
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

  if (isLoading) return <BigLoading />;

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitSignUp)} className={container}>
      <Title>새 지원서 작성하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox label="연락처" name="phone" formObject={formObject} required>
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
        formObject={formObject}
      />
      <TextBox비밀번호 formObject={formObject} />
      <div>
        <Checkbox required name="personalInformation" formObject={formObject}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
      <Button isLoading={isPending} type="submit" style={{ marginTop: 30 }}>
        지원서 작성하기
      </Button>
    </form>
  );
};

export default SignupPage;
