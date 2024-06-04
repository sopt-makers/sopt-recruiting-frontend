import TextBox from '@components/Input';
import { TextBoxProps } from '@components/Input/types';

const ApplyPage = () => {
  const textBoxProps1: TextBoxProps = {
    label: '타이틀1',
    placeholderText: '플레이스 홀더 텍스트',
    descriptionText: '더 알아보는 텍스트',
    errorText: '에러 텍스트',
    buttonHandler: () => console.log('버튼클릭'),
    buttonText: '더 알아보는 버튼',
    isRequired: true,
  };

  return (
    <form>
      <TextBox {...textBoxProps1} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextBox label="타이틀2" placeholderText="플레이스 홀더 텍스트2" isRequired />
        <TextBox placeholderText="텍스트" />
      </div>
    </form>
  );
};

export default ApplyPage;
