import TextBox from '@components/Input';

import { container } from '../views/MainPage/style.css';

const MainPage = () => {
  return (
    <div className={container}>
      <TextBox.Container>
        <TextBox.Title>이메일</TextBox.Title>
        <TextBox.Input placeholderText="인증 번호를 작성해주세요" type="email" maxLength={10} pattern=".+@gmail.com" />
        <TextBox.Description buttonText="눌러보세요">더 알아보기</TextBox.Description>
      </TextBox.Container>
    </div>
  );
};

export default MainPage;
