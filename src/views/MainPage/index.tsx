import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import { Description, InputLine, TextBox } from '@components/Input';
import Layout from '@components/Layout';
import Title from '@components/Title';

import { calloutButton, calloutWrapper, container } from './style.css';

const MainPage = () => {
  const { handleSubmit, ...formObject } = useForm();

  return (
    <Layout>
      <div className={container}>
        <Title>지원하기</Title>
        <Callout>
          <div className={calloutWrapper}>
            <p>
              34기 지원서 작성이 처음이라면 ‘새 지원서 작성 하기’를 진행해주세요. 이전 기수 지원서를 제출한 적이
              있더라도 새 지원서를 작성해야 해요.
            </p>
            <Link to="/sign-up" className={calloutButton}>
              새 지원서 작성하기
            </Link>
          </div>
        </Callout>
        <TextBox label="이메일" formObject={formObject} required>
          <InputLine label="이메일" placeholder="이메일을 입력해주세요" />
        </TextBox>
        <TextBox label="비밀번호" formObject={formObject} required>
          <InputLine label="비밀번호" placeholder="비밀번호를 입력해주세요" />
          <Description>
            <p>비밀번호를 잃어버리셨나요?</p>
            <a href="/password">비밀번호 재설정하기</a>
          </Description>
        </TextBox>
        <Button disabled>로그인</Button>
      </div>
    </Layout>
  );
};

export default MainPage;
