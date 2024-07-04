import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/VALIDATION_CHECK';

import { checkingVerificationCode, sendingVerificationCode } from './apis';
import InputButton from './InputButton';
import InputLine from './InputLine';
import { success } from './style.css';
import { TextBox } from './TextBox';
import Timer from './Timer';
import { CodeRequest, EmailRequest, TextBoxProps, VerificationResponse } from './types';

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
  isVerificationSuccess: boolean;
  onVerification: (bool: boolean) => void;
}

export const TextBox이메일 = ({ formObject, isVerificationSuccess, onVerification }: TextBox이메일Props) => {
  const [isActive, setActive] = useState(false); // Timer용 state

  const { mutate: sendingMutate, isPending: sendingIsPending } = useMutation<
    AxiosResponse<VerificationResponse, EmailRequest>,
    AxiosError<VerificationResponse, EmailRequest>,
    EmailRequest
  >({
    mutationFn: ({ email, season }: EmailRequest) => sendingVerificationCode(email, season),
    onSuccess: () => {
      onVerification(false);
      setActive(true);
    },
  });

  const { mutate: checkingMutate, isPending: checkingIsPending } = useMutation<
    AxiosResponse<VerificationResponse, CodeRequest>,
    AxiosError<VerificationResponse, CodeRequest>,
    CodeRequest
  >({
    mutationFn: ({ email, code }: CodeRequest) => checkingVerificationCode(email, code),
    onSuccess: () => {
      setActive(false);
      onVerification(true);
    },
    onError(error) {
      if (error.response?.status === 400) {
        formObject.setError('인증번호', {
          type: 'not-match',
          message: VALIDATION_CHECK.verificationCode.errorText,
        });
      }
    },
  });

  const handleSendingEmail = () => {
    if (formObject.getValues('이메일') === '' || formObject.formState.errors['이메일']) return;

    sendingMutate({ email: formObject.getValues('이메일'), season: 1 });
  };

  const handleVerificationCodeCheck = () => {
    checkingMutate({ email: formObject.getValues('이메일'), code: formObject.getValues('인증번호') });
  };

  return (
    <TextBox label="이메일" formObject={formObject} required>
      <InputLine
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.email.errorText}>
        <InputButton isLoading={sendingIsPending} text="이메일 인증" onClick={handleSendingEmail} disabled={isActive} />
        <Timer
          isActive={isActive}
          onResetTimer={() => {
            setActive(false);
          }}
        />
      </InputLine>
      <InputLine
        disabled={!isActive}
        label="인증번호"
        placeholder="이메일 인증 번호를 작성해주세요"
        maxLength={VALIDATION_CHECK.verificationCode.maxLength}>
        <InputButton
          disabled={!isActive}
          isLoading={checkingIsPending}
          text="확인"
          onClick={handleVerificationCodeCheck}
        />
      </InputLine>
      {isVerificationSuccess && <p className={success}>인증에 성공했어요.</p>}
    </TextBox>
  );
};

export const TextBox비밀번호 = ({ formObject }: Pick<TextBoxProps, 'formObject'>) => {
  const location = useLocation();
  const textVar = location.pathname === '/password' ? '새 비밀번호' : '비밀번호';
  const { watch } = formObject;

  return (
    <TextBox label={textVar} formObject={formObject} required>
      <InputLine
        label={textVar}
        placeholder={`${textVar}를 입력해주세요.`}
        type="password"
        maxLength={VALIDATION_CHECK.password.maxLength}
        pattern={VALIDATION_CHECK.password.pattern}
        errorText={VALIDATION_CHECK.password.errorText}
      />
      <InputLine
        label="비밀번호 재확인"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        type="password"
        maxLength={VALIDATION_CHECK.passwordConfirm.maxLength}
        errorText={VALIDATION_CHECK.passwordConfirm.errorText}
        validate={VALIDATION_CHECK.passwordConfirm.validate(watch, textVar)}
      />
    </TextBox>
  );
};
