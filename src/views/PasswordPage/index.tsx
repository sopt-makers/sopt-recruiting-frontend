import { FieldValues, useForm } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useDate from '@hooks/useDate';
import useVerificationStatus from '@hooks/useVerificationStatus';
import BigLoading from 'views/loadings/BigLoding';

import useMutateChangePassword from './hooks/useMutateChangePassword';
import { container } from './style.css';

const PasswordPage = () => {
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' });
  const { season, group, NoMoreRecruit, isLoading } = useDate();

  const { setError } = formObject;

  const { changePasswordMutate, changePasswordIsPending } = useMutateChangePassword();

  const handleChangePassword = ({ email, newPassword: password, passwordCheck }: FieldValues) => {
    if (!isVerified) {
      setError('code', {
        type: 'not-match',
        message: VALIDATION_CHECK.verificationCode.errorText,
      });

      return;
    }

    if (!season || !group) return;

    changePasswordMutate({
      email,
      password,
      passwordCheck,
      season,
      group,
    });
  };

  if (isLoading) return <BigLoading />;

  if (NoMoreRecruit) return <>모집 기간이 아니에요.</>;

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
          <Button isLoading={changePasswordIsPending} type="submit" style={{ marginTop: 30 }}>
            저장하기
          </Button>
        </>
      )}
    </form>
  );
};

export default PasswordPage;
