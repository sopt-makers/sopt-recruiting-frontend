import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
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
import useVerificationStatus from '@hooks/useVerificationStatus';

import { sendingSignUp } from './apis';
import { container } from './style.css';
import { SignUpError, SignUpRequest, SignUpResponse } from './types';

const SignupPage = () => {
  const navigate = useNavigate();
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm(); // 임시

  const { mutate, isPending } = useMutation<
    AxiosResponse<SignUpResponse, SignUpRequest>,
    AxiosError<SignUpError, SignUpRequest>,
    SignUpRequest
  >({
    mutationFn: (userInfo: SignUpRequest) => sendingSignUp(userInfo),
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleSubmitSignUp = (data: FieldValues) => {
    if (!isVerified) {
      formObject.setError('인증번호', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }

    mutate({
      email: data['이메일'],
      password: data['비밀번호'],
      passwordCheck: data['비밀번호 재확인'],
      name: data['이름'],
      phone: data['연락처'],
      season: 1,
      group: 'OB',
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit(handleSubmitSignUp)} className={container}>
      <Title>새 지원서 작성하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox label="연락처" formObject={formObject} required>
        <InputLine
          label="연락처"
          placeholder="010-0000-0000"
          type="tel"
          pattern={VALIDATION_CHECK.phoneNumber.pattern}
          maxLength={VALIDATION_CHECK.phoneNumber.maxLength}
          errorText={VALIDATION_CHECK.phoneNumber.errorText}
        />
      </TextBox>
      <TextBox이메일 isVerified={isVerified} onChangeVerification={handleVerified} formObject={formObject} />
      <TextBox비밀번호 formObject={formObject} />
      <div>
        <Checkbox required label="check1" formObject={formObject}>
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
