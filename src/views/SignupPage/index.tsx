import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Contentbox from '@components/Checkbox/Contentbox';
import { InputLine, TextBox } from '@components/Input';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';
import { PRIVACY_POLICY } from '@constants/policy';
import { VALIDATION_CHECK } from '@constants/VALIDATION_CHECK';

import { container } from './style.css';

const SignupPage = () => {
  const { handleSubmit, ...formObject } = useForm(); // 임시

  return (
    <form noValidate onSubmit={handleSubmit((data) => console.log(data))} className={container}>
      <Title>새 지원서 작성하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox label="연락처" formObject={formObject} required>
        <InputLine
          label="연락처"
          placeholder="010-0000-0000"
          type="tel"
          pattern={VALIDATION_CHECK.phoneNumber.pattern}
          maxLength={VALIDATION_CHECK.phoneNumber.maxLength}
          errorText={VALIDATION_CHECK.phoneNumber.errorText}
        />
      </TextBox>
      <TextBox이메일 formObject={formObject} />
      <TextBox비밀번호 formObject={formObject} />
      <div>
        <Checkbox required label="check1" formObject={formObject}>
          개인정보 수집 ‧ 이용에 동의합니다.
        </Checkbox>
        <Contentbox>{PRIVACY_POLICY}</Contentbox>
      </div>
      <Button type="submit" style={{ marginTop: 30 }}>
        지원서 작성하기
      </Button>
    </form>
  );
};

export default SignupPage;
