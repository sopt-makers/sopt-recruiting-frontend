import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
        pattern={/^[가-힣]+$/}
        errorText="잘못된 이름(한글명) 형식이에요. 이름(한글명)을 정확하게 입력해주세요."
        placeholder="지원자 이름을 공백 없이 한글로 입력해주세요."
        maxLength={10}
        minLength={2}
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
        pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
        errorText="이메일 형식이 올바르지 않아요.">
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
        pattern={/^0-9$/}
        errorText="인증 번호가 일치하지 않아요."
        maxLength={6}>
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
        pattern={/^[a-zA-Z0-9!@#$%^&*()_+[\]{};':="\\|,.<>/?`~-]{4,}$/}
        errorText="비밀번호는 영문 대소문자/숫자/특수 문자 조합, 4자리 이상으로 구성 해주세요."
      />
      <InputLine
        label="비밀번호 재확인"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        type="password"
        errorText="비밀번호가 일치하지 않아요."
        validate={(val) => {
          if (watch(textVar) != val) {
            return '비밀번호가 일치하지 않아요.';
          }
        }}
      />
    </TextBox>
  );
};
