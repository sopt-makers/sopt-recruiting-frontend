import TextBox from '@components/Input';
import { TextBoxProps } from '@components/Input/types';

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
  const textBoxProps1: TextBoxProps = {
    label: '타이틀1',
    placeholderText: '플레이스 홀더 텍스트',
    descriptionText: '더 알아보는 텍스트',
    descriptionButton: <MoreButton />,
    errorText: '에러 텍스트',
    isRequired: true,
  };

  return (
    <form>
      <TextBox {...textBoxProps1} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextBox label="타이틀2" placeholderText="플레이스 홀더 텍스트2" button={<CheckButton />} isRequired />
        <TextBox placeholderText="고정 텍스트" isFixed />
      </div>
    </form>
  );
};

export default ApplyPage;
