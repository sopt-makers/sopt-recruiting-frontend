import TextBox from '@components/Input';
import { TextBoxProps } from '@components/Input/types';
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
  const { handleSubmit, ...formObject } = useForm<any>({ mode: 'onBlur' });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  const textBoxProps1: TextBoxProps = {
    label: '타이틀1',
    placeholder: '플레이스 홀더 텍스트',
    size: 'lg',
    descriptionText: '더 알아보는 텍스트',
    descriptionButton: <MoreButton />,
    errorText: '에러 텍스트',
    required: true,
    formObject,
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextBox {...textBoxProps1} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextBox
          label="타이틀2"
          placeholder="플레이스 홀더 텍스트2"
          button={<CheckButton />}
          required
          maxLength={5}
          formObject={formObject}
        />
        <TextBox label="타이틀3" placeholder="고정 텍스트" disabled secondary formObject={formObject} />
      </div>
      <input type="submit" value="제출버튼!" style={{ backgroundColor: 'green' }} />
    </form>
  );
};

export default ApplyPage;
