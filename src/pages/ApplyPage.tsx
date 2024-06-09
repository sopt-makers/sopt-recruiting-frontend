import TextBox from '@components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';

const MoreButton = () => {
  return (
    <button type="button" style={{ cursor: 'pointer' }} onClick={() => console.log('버튼클릭')}>
      더알아보는버튼
    </button>
  );
};

const CheckButton = () => {
  return (
    <button
      type="button"
      style={{ cursor: 'pointer', backgroundColor: 'green', padding: 10 }}
      onClick={() => console.log('버튼클릭')}>
      인증하기
    </button>
  );
};

const ApplyPage = () => {
  const { handleSubmit, ...formObject } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextBox.Container label="이메일" required formObject={formObject}>
        <TextBox.InputLine
          label="이메일"
          button={<CheckButton />}
          placeholder="이메일을 입력하세요"
          pattern={/^[0-9]*$/}
          errorText="숫자만 입력해주세요"
        />
        <TextBox.InputLine
          label="인증번호"
          placeholder="인증번호를 입력하세요"
          validate={(v) => v === '가나다라마바사' || '틀렸어요'}
          errorText="틀렸습니다"
        />
        <TextBox.Description>
          <p>더 알아보는 텍스트</p>
          <MoreButton />
        </TextBox.Description>
      </TextBox.Container>
      <input type="submit" value="제출버튼!" style={{ backgroundColor: 'green', marginTop: 30 }} />
    </form>
  );
};

export default ApplyPage;
