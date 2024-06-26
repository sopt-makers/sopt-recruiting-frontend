import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Checkbox from '@components/Checkbox';
import { Description, InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름 } from '@components/Input/InputTheme';
import Radio from '@components/Radio';
import Textarea from '@components/Textarea';
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
        <Checkbox label="체크" formObject={formObject} required>
          체크하기
        </Checkbox>
        <Radio label={['재학', '유예']} name="학교" value="재학" formObject={formObject} required />
        <Textarea
          label="텍스트에어리어"
          formObject={formObject}
          maxCount={700}
          required>{`3. 최근 1년 이내로 머릿속으로만 생각하고 있던 계획을 행동으로 옮겨본 경험이 있나요? 만약 있다면 어떤. 계획이. 었으며, 행동을 통해 어떤 성장을 이루어냈는지에 대해 구체적으로 서술해 주세요. 만약 없다면, 해당 계획을 행동으로 옮기기 위한 액션 플랜을 서술해 주세요.`}</Textarea>
        <Button type="submit">제출하기</Button>
      </form>
    </>
  );
};

export default TestPage;
