import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import { Description, InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import FileInput from 'views/ApplyPage/components/FileInput';

const TestPage = () => {
  const { handleSubmit, ...formObject } = useForm();
  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <>
      <Title>지원하기</Title>
      <Callout>새 지원서 작성하기</Callout>
      <br />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <TextBox이름 formObject={formObject} />
        <TextBox label="이메일2" formObject={formObject} required>
          <InputLine
            label="이메일2"
            placeholder="이메일을 입력해주세요"
            type="email"
            pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
            errorText="이메일 형식이 올바르지 않아요."
          />
        </TextBox>
        {/* <TextBox이메일 formObject={formObject} /> */}
        <TextBox label="비밀번호2" formObject={formObject} required>
          <InputLine
            label="비밀번호2"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            pattern={/^[a-zA-Z0-9!@#$%^&*()_+[\]{};':="\\|,.<>/?`~-]{4,}$/}
            errorText="비밀번호는 영문 대소문자/숫자/특수 문자 조합, 4자리 이상으로 구성 해주세요."
          />
          <Description>
            <p>비밀번호를 잃어버리셨나요?</p>
            <Link to="/password">비밀번호 재설정하기</Link>
          </Description>
        </TextBox>
        <TextBox비밀번호 formObject={formObject} />
        <TextBox label="연락처" formObject={formObject} required>
          <InputLine
            label="연락처"
            placeholder="010-0000-0000"
            type="tel"
            pattern={/^010-?\d{3,4}-?\d{4}$/}
            errorText="잘못된 휴대폰 번호 형식이에요. 휴대폰 번호를 정확하게 입력해주세요."
            maxLength={13}
          />
        </TextBox>
        <TextBox label="생년월일" formObject={formObject} required>
          <InputLine
            label="생년월일"
            placeholder="YYYY/MM/DD"
            type="date"
            min="1990-01-01"
            max={new Date().toISOString().split('T')[0]}
            errorText="잘못된 휴대폰 번호 형식이에요. 휴대폰 번호를 정확하게 입력해주세요."
          />
        </TextBox>
        <FileInput />
        <Button type="submit">제출하기</Button>
      </form>
    </>
  );
};

export default TestPage;
