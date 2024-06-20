import { useForm, SubmitHandler } from 'react-hook-form';

import Button from '@components/Button';
import { Description, InputLine, TextBox, Timer } from '@components/Input';
import SelectBox from '@components/Select';
import { TFormValues, defaultValues } from '@constants/defaultValues';

const MoreButton = () => {
  return (
    <button type="button" style={{ cursor: 'pointer' }} onClick={() => console.log('버튼클릭')}>
      더알아보는버튼
    </button>
  );
};

const CheckButton = () => {
  return <Button style={{ width: '148px' }}>인증하기</Button>;
};

const ApplyPage = () => {
  const { handleSubmit, ...formObject } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ padding: 50 }}>
      <SelectBox label="성별" options={['남자', '여자']} formObject={formObject} />
      <br />
      <br />
      <br />
      <TextBox label="이메일" required formObject={formObject}>
        <InputLine
          label="이메일"
          button={<CheckButton />}
          placeholder="이메일을 입력하세요"
          pattern={/^[0-9]*$/}
          errorText="숫자만 입력해주세요">
          <Timer />
        </InputLine>
        <InputLine
          label="인증번호"
          placeholder="인증번호를 입력하세요"
          validate={(_, v) => v['이메일'] === '검사조건' || '틀렸어요'}
          errorText="틀렸습니다"
        />
        <Description>
          <p>더 알아보는 텍스트</p>
          <MoreButton />
        </Description>
      </TextBox>
      <input type="submit" value="제출버튼!" style={{ backgroundColor: 'green', marginTop: 30 }} />
    </form>
  );
};

export default ApplyPage;
