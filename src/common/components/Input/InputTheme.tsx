import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { checkingEmail, checkingVerificationCode, sendingVerificationCode } from './apis';
import InputButton from './InputButton';
import InputLine from './InputLine';
import { error, success } from './style.css';
import { TextBox } from './TextBox';
import Timer from './Timer';
import { CheckEmailRequest, CodeRequest, SendEmailRequest, TextBoxProps, EmailResponse } from './types';

export const TextBox이름 = ({ formObject }: Pick<TextBoxProps, 'formObject'>) => {
  return (
    <TextBox label="이름" formObject={formObject} required>
      <InputLine
        label="이름"
        pattern={VALIDATION_CHECK.name.pattern}
        errorText={VALIDATION_CHECK.name.errorText}
        placeholder="지원자 이름을 공백 없이 한글로 입력해주세요."
        maxLength={VALIDATION_CHECK.name.maxLength}
        minLength={VALIDATION_CHECK.name.minLength}
      />
    </TextBox>
  );
};

interface TextBox이메일Props {
  formObject: TextBoxProps['formObject'];
  isVerified: boolean;
  onChangeVerification: (bool: boolean) => void;
}

export const TextBox이메일 = ({ formObject, isVerified, onChangeVerification }: TextBox이메일Props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false); // Timer용 state
  const {
    clearErrors,
    getValues,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = formObject;

  const { mutate: sendingMutate, isPending: sendingIsPending } = useMutation<
    AxiosResponse<EmailResponse, SendEmailRequest>,
    AxiosError<EmailResponse, SendEmailRequest>,
    SendEmailRequest
  >({
    mutationFn: ({ email, season }: SendEmailRequest) => sendingVerificationCode(email, season),
    onSuccess: () => {
      onChangeVerification(false);
      setIsActive(true);
    },
  });

  const { mutate: checkingEmailMutate, isPending: checkingEmailPending } = useMutation<
    AxiosResponse<EmailResponse, CheckEmailRequest>,
    AxiosError<EmailResponse, CheckEmailRequest>,
    CheckEmailRequest
  >({
    mutationFn: (userInfo: CheckEmailRequest) => checkingEmail(userInfo),
    onSuccess: () => {
      clearErrors();
      sendingMutate({ email: getValues('이메일'), season: 1 });
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        setError('이름', {
          type: 'non-existence',
          message: VALIDATION_CHECK.name.errorTextNonexistence,
        });
        setError('이메일', {
          type: 'non-existence',
          message: VALIDATION_CHECK.email.errorTextNonexistence,
        });
      }
    },
  });

  const { mutate: checkingMutate, isPending: checkingIsPending } = useMutation<
    AxiosResponse<EmailResponse, CodeRequest>,
    AxiosError<EmailResponse, CodeRequest>,
    CodeRequest
  >({
    mutationFn: ({ email, code }: CodeRequest) => checkingVerificationCode(email, code),
    onSuccess: () => {
      setIsActive(false);
      onChangeVerification(true);
    },
    onError(error) {
      if (error.response?.status === 400) {
        setError('인증번호', {
          type: 'not-match',
          message: VALIDATION_CHECK.verificationCode.errorText,
        });
      }
    },
  });

  const handleResetTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleSendingEmail = () => {
    const email = getValues('이메일');
    const name = getValues('이름');
    let isDone = true;

    // 이메일 유효성 검사
    if (!email) {
      setError('이메일', { type: 'required', message: '필수 입력 항목이에요.' });
      isDone = false;
    }

    if (location.pathname === '/password') {
      // 이름 유효성 검사
      if (!name) {
        setError('이름', { type: 'required', message: '필수 입력 항목이에요.' });
        isDone = false;
      }

      // 존재 하는 계정인지 검사
      const nameError = errors['이름'] && errors['이름'].message !== VALIDATION_CHECK.name.errorTextNonexistence;
      const emailError = errors['이메일'] && errors['이메일'].message !== VALIDATION_CHECK.name.errorTextNonexistence;

      if (nameError || emailError) isDone = false;

      // 오류가 없을 때 이메일 확인 요청
      if (!emailError && isDone) {
        setValue('인증번호', '');
        clearErrors('이메일');
        checkingEmailMutate({ email, name, season: 1, group: 'OB' });
      }
      return;
    }

    if (location.pathname === '/sign-up' && !errors['이메일'] && isDone) {
      sendingMutate({ email, season: 1 });
    }
  };

  const handleVerificationCodeCheck = () => {
    checkingMutate({ email: getValues('이메일'), code: getValues('인증번호') });
  };

  useEffect(() => {
    onChangeVerification(false);
    setValue('인증번호', '');
  }, [watch('이메일')]);

  return (
    <TextBox label="이메일" formObject={formObject} required>
      <InputLine
        style={{ paddingRight: isActive ? 50 : 16 }}
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.email.errorText}>
        <InputButton
          isLoading={checkingEmailPending || sendingIsPending}
          text="이메일 인증"
          onClick={handleSendingEmail}
          disabled={isActive}
        />
        <Timer isActive={isActive} onResetTimer={handleResetTimer} />
      </InputLine>
      <InputLine
        readOnly={!isActive}
        label="인증번호"
        placeholder="이메일 인증 번호를 작성해주세요."
        maxLength={VALIDATION_CHECK.verificationCode.maxLength}>
        <InputButton
          disabled={!isActive}
          isLoading={checkingIsPending}
          text="확인"
          onClick={handleVerificationCodeCheck}
        />
      </InputLine>
      {isVerified && <p className={success}>인증에 성공했어요.</p>}
    </TextBox>
  );
};

export const TextBox비밀번호 = ({ formObject }: Pick<TextBoxProps, 'formObject'>) => {
  const location = useLocation();
  const textVar = location.pathname === '/password' ? '새 비밀번호' : '비밀번호';
  const { watch, trigger } = formObject;

  const password = watch(textVar);
  const passwordConfirm = watch('비밀번호 재확인');

  useEffect(() => {
    if (passwordConfirm != undefined && passwordConfirm !== '') trigger('비밀번호 재확인');
  }, [password, passwordConfirm, trigger]);

  return (
    <TextBox label={textVar} formObject={formObject} required>
      <InputLine
        label={textVar}
        placeholder={`${textVar}를 입력해주세요.`}
        type="password"
        maxLength={VALIDATION_CHECK.password.maxLength}
        pattern={VALIDATION_CHECK.password.pattern}
        errorText={VALIDATION_CHECK.password.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, textVar)}
      />
      <InputLine
        label="비밀번호 재확인"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        type="password"
        maxLength={VALIDATION_CHECK.passwordConfirm.maxLength}
        errorText={VALIDATION_CHECK.passwordConfirm.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, textVar)}
      />
      {passwordConfirm && password === passwordConfirm && <p className={success}>비밀번호가 일치해요.</p>}
    </TextBox>
  );
};
