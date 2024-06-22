import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import { InputButton, InputLine, TextBox, Timer } from '@components/Input';
import Title from '@components/Title';

import { PRIVACY_POLICY } from './constant';
import { container } from './style.css';

const SignupPage = () => {
  const [isActive, setActive] = useState(false); // Timer용 state

  const { handleSubmit, ...formObject } = useForm(); // 임시

  const handleClick이메일인증 = () => {
    setActive(true);
  };
  const handleClick확인 = () => {};

  return (
    <form className={container}>
      <Title>새 지원서 작성하기</Title>
      <TextBox label="이름" formObject={formObject} required>
        <InputLine label="이름" placeholder="지원자 이름을 공백 없이 입력해주세요." required />
      </TextBox>
      <TextBox label="연락처" formObject={formObject} required>
        <InputLine label="연락처" placeholder="010-0000-0000" required type="tel" />
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
      <TextBox label="비밀번호" formObject={formObject} required>
        <InputLine label="비밀번호" placeholder="비밀번호를 입력해주세요." required type="password" />
        <InputLine
          label="비밀번호 재확인"
          placeholder="비밀번호 확인을 위해 다시 한번 입력해주세요."
          required
          type="password"
        />
      </TextBox>
      <div>
        <Checkbox required label="check1" register={formObject.register} errors={formObject.formState.errors}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
      <Button disabled style={{ marginTop: 30 }}>
        지원서 작성하기
      </Button>
    </form>
  );
};

export default SignupPage;
