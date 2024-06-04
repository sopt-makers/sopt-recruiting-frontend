import TextBox from '@components/Input';
import { TextBoxProps } from '@components/Input/types';

const ApplyPage = () => {
  const textBoxProps: TextBoxProps = {
    label: '타이틀',
    placeholderText: '플레이스 홀더 텍스트',
    descriptionText: '더 알아보는 텍스트',
    errorText: '에러 텍스트',
    buttonHandler: () => console.log('버튼클릭'),
    buttonText: '더 알아보는 버튼',
    isRequired: true,
  };
  return <TextBox {...textBoxProps} />;
};

export default ApplyPage;
