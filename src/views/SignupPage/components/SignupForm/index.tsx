import { useEffect } from 'react';
import { type FieldValues, useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import { InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import { PRIVACY_POLICY } from '@constants/policy';
import { VALIDATION_CHECK } from '@constants/validationCheck';
import useVerificationStatus from '@hooks/useVerificationStatus';
import useMutateSignUp from 'views/SignupPage/hooks/useMutateSignUp';

import { formWrapper } from './style.css';

import type { SeasonGroupType } from '@type/seasonAndGroup';

const SignupForm = ({ season, group }: SeasonGroupType) => {
  const { isVerified, handleVerified } = useVerificationStatus();
  const { handleSubmit, ...formObject } = useForm({ mode: 'onBlur' }); // 임시
  const {
    setError,
    setFocus,
    formState: { errors },
  } = formObject;
  const { signUpMutate, signUpIsPending } = useMutateSignUp({
    onSetError: (name, type, message) => setError(name, { type, message }),
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
    <form noValidate onSubmit={handleSubmit(handleSubmitSignUp)} className={formWrapper}>
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
      <Button isLoading={signUpIsPending} type="submit" style={{ marginTop: 30 }}>
        지원서 작성하기
      </Button>
    </form>
  );
};

export default SignupForm;
