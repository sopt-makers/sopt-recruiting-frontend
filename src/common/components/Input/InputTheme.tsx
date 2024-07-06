import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import InputButton from './InputButton';
import InputLine from './InputLine';
import { TextBox } from './TextBox';
import Timer from './Timer';
import { TextBoxProps } from './types';

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

export const TextBox이메일 = ({ formObject }: Pick<TextBoxProps, 'formObject'>) => {
  const [isActive, setActive] = useState(false); // Timer용 state

  const handleClick이메일인증 = () => {
    setActive(true);
  };
  const handleClick확인 = () => {};

  return (
    <TextBox label="이메일" formObject={formObject} required>
      <InputLine
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
        pattern={VALIDATION_CHECK.email.pattern}
        maxLength={VALIDATION_CHECK.email.maxLength}
        errorText={VALIDATION_CHECK.email.errorText}>
        <InputButton text="이메일 인증" onClick={handleClick이메일인증} disabled={isActive} />
        <Timer
          isActive={isActive}
          onResetTimer={() => {
            setActive(false);
          }}
        />
      </InputLine>
      <InputLine
        label="인증번호"
        placeholder="이메일 인증 번호를 작성해주세요"
        pattern={VALIDATION_CHECK.verificationCode.pattern}
        errorText={VALIDATION_CHECK.verificationCode.errorText}
        maxLength={VALIDATION_CHECK.verificationCode.maxLength}>
        <InputButton text="확인" onClick={handleClick확인} disabled />
      </InputLine>
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
