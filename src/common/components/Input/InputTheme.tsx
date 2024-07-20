import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';
import useScrollToHash from '@hooks/useScrollToHash';

import { checkUser, checkVerificationCode, sendVerificationCode } from './apis';
import InputButton from './InputButton';
import InputLine from './InputLine';
import { success } from './style.css';
import { TextBox } from './TextBox';
import Timer from './Timer';

import type {
  CheckUserRequest,
  CheckVerificationCodeRequest,
  SendVerificationCodeRequest,
  EmailResponse,
} from './types';
import type { ErrorResponse } from '@type/errorResponse';

export const TextBox이름 = () => {
  return (
    <TextBox label="이름" name="name" required>
      <InputLine
        name="name"
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
  recruitingInfo: { season?: number; group?: string };
  isVerified: boolean;
  onChangeVerification: (bool: boolean) => void;
}

export const TextBox이메일 = ({
  recruitingInfo: { season, group },
  isVerified,
  onChangeVerification,
}: TextBox이메일Props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false); // Timer용 state
  const {
    clearErrors,
    getValues,
    setError,
    setValue,
    setFocus,
    watch,
    formState: { errors },
  } = useFormContext();
  const { email, name } = getValues();
  const navigate = useNavigate();
  const code = watch('code');
  useScrollToHash('auto');

  const { mutate: sendVerificationCodeMutate, isPending: sendVerificationCodeIsPending } = useMutation<
    AxiosResponse<EmailResponse, SendVerificationCodeRequest>,
    AxiosError<ErrorResponse, SendVerificationCodeRequest>,
    SendVerificationCodeRequest
  >({
    mutationFn: ({ email, season, group, isSignup }: SendVerificationCodeRequest) =>
      sendVerificationCode(email, season, group, isSignup),
    onSuccess: () => {
      onChangeVerification(false);
      setIsActive(true);
    },
    onError: (error) => {
      if (error.response?.status === 400 || error.response?.status === 403) {
        setError('email', {
          type: 'already-existence',
          message: VALIDATION_CHECK.email.errorTextExistence,
        });
      }
    },
  });

  const { mutate: checkUserMutate, isPending: checkUserIsPending } = useMutation<
    AxiosResponse<EmailResponse, CheckUserRequest>,
    AxiosError<ErrorResponse, CheckUserRequest>,
    CheckUserRequest
  >({
    mutationFn: (userInfo: CheckUserRequest) => checkUser(userInfo),
    onSuccess: () => {
      clearErrors();
      if (!season || !group) return;
      sendVerificationCodeMutate({ email, season, group, isSignup: false });
    },
    onError: (error) => {
      if (error.response?.status === 400 || error.response?.status === 403) {
        setError('name', {
          type: 'non-existence',
          message: VALIDATION_CHECK.name.errorTextNonexistence,
        });
        setError('email', {
          type: 'non-existence',
          message: VALIDATION_CHECK.email.errorTextNonexistence,
        });
      }
    },
  });

  const { mutate: checkVerificationCodeMutate, isPending: checkVerificationCodeIsPending } = useMutation<
    AxiosResponse<EmailResponse, CheckVerificationCodeRequest>,
    AxiosError<ErrorResponse, CheckVerificationCodeRequest>,
    CheckVerificationCodeRequest
  >({
    mutationFn: ({ email, code }: CheckVerificationCodeRequest) => checkVerificationCode(email, code),
    onSuccess: () => {
      setIsActive(false);
      onChangeVerification(true);
    },
    onError(error) {
      if (error.response?.status === 400) {
        setError('code', {
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
    let isDone = true;

    // 이메일 유효성 검사
    if (!email) {
      setError('email', { type: 'required', message: '필수 입력 항목이에요.' });
      isDone = false;
    }

    if (location.pathname === '/password') {
      // 이름 유효성 검사
      if (!name) {
        setError('name', { type: 'required', message: '필수 입력 항목이에요.' });
        isDone = false;
      }

      // 존재 하는 계정인지 검사
      const nameError = errors[name] && errors[name]?.message !== VALIDATION_CHECK.name.errorTextNonexistence;
      const emailError = errors.email && errors.email.message !== VALIDATION_CHECK.name.errorTextNonexistence;

      if (nameError || emailError) isDone = false;

      // 오류가 없을 때 이메일 확인 요청
      if (!emailError && isDone) {
        checkUserMutate({ email, name, season, group });
        setValue('code', '');
        clearErrors('email');
      }
      return;
    }

    if (location.pathname === '/sign-up' && !errors.email && isDone) {
      if (!season || !group) return;
      sendVerificationCodeMutate({ email, season, group, isSignup: true });
    }
  };

  const handleVerificationCodeCheck = () => {
    checkVerificationCodeMutate({ email, code });
  };

  useEffect(() => {
    onChangeVerification(false);
    setValue('code', '');
    setIsActive(false);
  }, [watch('email')]);

  useEffect(() => {
    if (errors.code) navigate('#verification-code');
  }, [errors.code, setFocus]);

  return (
    <TextBox label="이메일" name="email" required>
      <InputLine
        style={{ paddingRight: isActive ? 50 : 16 }}
        name="email"
        placeholder="이메일을 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.email.errorText}>
        <InputButton
          isLoading={checkUserIsPending || sendVerificationCodeIsPending}
          text="이메일 인증"
          onClick={handleSendingEmail}
          disabled={isActive}
        />
        <Timer isActive={isActive} onResetTimer={handleResetTimer} />
      </InputLine>
      <InputLine
        id="verification-code"
        readOnly={!isActive}
        name="code"
        placeholder="이메일 인증 번호를 작성해주세요."
        maxLength={VALIDATION_CHECK.verificationCode.maxLength}>
        <InputButton
          disabled={!isActive}
          isLoading={checkVerificationCodeIsPending}
          text="확인"
          onClick={handleVerificationCodeCheck}
        />
      </InputLine>
      {isActive && (
        <>
          <p className={success}>이메일이 전송되었어요.</p>
          <p className={success} style={{ marginTop: '-8px' }}>
            네트워크 상황에 따라 약 1분 정도 소요될 수 있어요.
          </p>
        </>
      )}
      {isVerified && <p className={success}>인증에 성공했어요.</p>}
    </TextBox>
  );
};

export const TextBox비밀번호 = () => {
  const location = useLocation();
  const textVar = location.pathname === '/password' ? '새 비밀번호' : '비밀번호';
  const name = location.pathname === '/password' ? 'newPassword' : 'password';
  const { watch, trigger } = useFormContext();

  const password = watch(name);
  const passwordConfirm = watch('passwordCheck');

  useEffect(() => {
    if (passwordConfirm != undefined && passwordConfirm !== '') trigger('passwordCheck');
  }, [password, passwordConfirm, trigger]);

  return (
    <TextBox label={textVar} name={name} required>
      <InputLine
        name={name}
        placeholder={`${textVar}를 입력해주세요.`}
        autoComplete="new-password"
        type="password"
        maxLength={VALIDATION_CHECK.password.maxLength}
        pattern={VALIDATION_CHECK.password.pattern}
        errorText={VALIDATION_CHECK.password.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, name)}
      />
      <InputLine
        name="passwordCheck"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        type="password"
        maxLength={VALIDATION_CHECK.passwordConfirm.maxLength}
        errorText={VALIDATION_CHECK.passwordConfirm.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, name)}
      />
      {passwordConfirm && password === passwordConfirm && <p className={success}>비밀번호가 일치해요.</p>}
    </TextBox>
  );
};
