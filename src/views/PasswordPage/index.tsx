import { useMutation } from '@tanstack/react-query';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import { useGetRecruitingInfo } from '@hooks/use';
import useVerificationStatus from '@hooks/useVerificationStatus';
import BigLoading from 'views/loadings/BigLoding';

import { sendingPasswordChange } from './apis';
import { container } from './style.css';
import { PasswordError, PasswordRequest, PasswordResponse } from './types';

import type { AxiosError, AxiosResponse } from 'axios';

const PasswordPage = () => {
  const navigate = useNavigate();
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const { data, isLoading } = useGetRecruitingInfo();

  const { setError } = formObject;
  const { season, group } = data?.data.season || {};

  const { mutate, isPending } = useMutation<
    AxiosResponse<PasswordResponse, PasswordRequest>,
    AxiosError<PasswordError, PasswordRequest>,
    PasswordRequest
  >({
    mutationFn: (userInfo: PasswordRequest) => sendingPasswordChange(userInfo),
    onSuccess: () => {
      navigate('/');
    },
  });

  const handleChangePassword = ({ email, password, passwordCheck }: FieldValues) => {
    if (!isVerified) {
      setError('code', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }

    if (!season) return;

    mutate({
      email,
      password,
      passwordCheck,
      season,
      group: 'OB',
    });
  };

  if (isLoading) return <BigLoading />;

  return (
    <form noValidate onSubmit={handleSubmit(handleChangePassword)} className={container}>
      <Title>비밀번호 재설정하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox이메일
        recruitingInfo={{ season, group }}
        isVerified={isVerified}
        onChangeVerification={handleVerified}
        formObject={formObject}
      />
      {isVerified && (
        <>
          <TextBox비밀번호 formObject={formObject} />
          <Button isLoading={isPending} type="submit" style={{ marginTop: 30 }}>
            저장하기
          </Button>
        </>
      )}
    </form>
  );
};

export default PasswordPage;
