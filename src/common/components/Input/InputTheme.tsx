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
      <InputLine label="이름" placeholder="지원자 이름을 공백 없이 입력해주세요." required />
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
      <InputLine label="이메일" placeholder="이메일을 입력해주세요." required type="email">
        <InputButton text="이메일 인증" onClick={handleClick이메일인증} disabled={isActive} />
        <Timer
          isActive={isActive}
          onResetTimer={() => {
            setActive(false);
          }}
        />
      </InputLine>
      <InputLine label="인증번호" placeholder="이메일 인증 번호를 작성해주세요" required>
        <InputButton text="확인" onClick={handleClick확인} disabled />
      </InputLine>
    </TextBox>
  );
};

export const TextBox비밀번호 = ({ formObject }: Pick<TextBoxProps, 'formObject'>) => {
  const location = useLocation();
  const textVar = location.pathname === '/password' ? '새 비밀번호' : '비밀번호';

  return (
    <TextBox label={textVar} formObject={formObject} required>
      <InputLine label={textVar} placeholder={`${textVar}를 입력해주세요.`} required type="password" />
      <InputLine
        label="비밀번호 재확인"
        placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
        required
        type="password"
      />
    </TextBox>
  );
};
