import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import { InputButton, InputLine, TextBox, Timer } from '@components/Input';
import Title from '@components/Title';

import { container } from './style.css';

const PasswordPage = () => {
  const { handleSubmit, ...formObject } = useForm(); // 임시
  const [isActive, setActive] = useState(false); // Timer용 state

  const handleClick이메일인증 = () => {
    setActive(true);
  };
  const handleClick확인 = () => {};

  return (
    <form className={container}>
      <Title>비밀번호 재설정하기</Title>
      <TextBox label="이름" formObject={formObject} required>
        <InputLine label="이름" placeholder="지원자 이름을 공백 없이 입력해주세요." required />
      </TextBox>
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
      <TextBox label="새 비밀번호" formObject={formObject} required>
        <InputLine label="새 비밀번호" placeholder="새 비밀번호를 입력해주세요." required type="password" />
        <InputLine
          label="비밀번호 재확인"
          placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
          required
          type="password"
        />
      </TextBox>
      <Button disabled style={{ marginTop: 30 }}>
        저장하기
      </Button>
    </form>
  );
};

export default PasswordPage;
