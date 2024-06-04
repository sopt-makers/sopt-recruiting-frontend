import TextBox from '@components/Input';

const ApplyPage = () => {
  return (
    <TextBox.Container>
      <TextBox.Title>이메일</TextBox.Title>
      <TextBox.Input placeholderText="인증 번호를 작성해주세요" type="email" maxLength={20} pattern=".+@gmail.com" />
      <TextBox.Description buttonText="눌러보세요">더 알아보기</TextBox.Description>
    </TextBox.Container>
  );
};

export default ApplyPage;
