import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import { InputButton, InputLine, TextBox } from '@components/Input';
import Title from '@components/Title';

import { container } from './style.css';

const SignupPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleSubmit, ...formObject } = useForm(); // 임시
  return (
    <div className={container}>
      <Title>새 지원서 작성하기</Title>
      <TextBox label="이름" formObject={formObject} required>
        <InputLine label="이름" placeholder="지원자 이름을 공백 없이 입력해주세요." required />
      </TextBox>
      <TextBox label="연락처" formObject={formObject} required>
        <InputLine label="연락처" placeholder="010-0000-0000" required type="tel" />
      </TextBox>
      <TextBox label="이메일" formObject={formObject} required>
        <InputLine label="이메일" placeholder="이메일을 입력해주세요." required type="email">
          <InputButton text="이메일 인증" onClick={() => {}} disabled />
        </InputLine>
        <InputLine label="이메일 인증번호" placeholder="이메일 인증 번호를 작성해주세요" required>
          <InputButton text="확인" onClick={() => {}} disabled />
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
        <Checkbox
          showIcon
          required
          label="check1"
          register={formObject.register}
          errors={formObject.formState.errors}
          isOpen={isOpen}
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox isOpen={isOpen}>
          {`SOPT는 아래 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하는데 최선을 다합니다.
    개인정보 수집 및 이용에 대한 안내
    1. 목적 : 지원자 개인 식별, 지원의사 확인, 모집전형의 진행, 고지사항 전달, 입사 지원자와의 원활한 의사소통, 지원이력 확인, 합격 시 회원정보 활용
    2. 항목 : 이메일주소, 이름, 생년월일, 휴대폰번호, 학력, 주소, 성별
    3. 보유기간 : 회원 탈퇴 및 제명 시까지 보유 위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 지원자 등록이 제한될 수 있습니다.`}
        </Contentbox>
      </div>
      <Button disabled style={{ marginTop: 30 }}>
        지원서 작성하기
      </Button>
    </div>
  );
};

export default SignupPage;
