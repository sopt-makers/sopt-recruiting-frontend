import { useForm } from 'react-hook-form';

import Button from '@components/Button';
import { TextBox비밀번호, TextBox이름, TextBox이메일 } from '@components/Input/InputTheme';
import Title from '@components/Title';

import { container } from './style.css';

const PasswordPage = () => {
  const { handleSubmit, ...formObject } = useForm(); // 임시

  return (
    <form noValidate onSubmit={handleSubmit((data) => console.log(data))} className={container}>
      <Title>비밀번호 재설정하기</Title>
      <TextBox이름 formObject={formObject} />
      <TextBox이메일 formObject={formObject} />
      <TextBox비밀번호 formObject={formObject} />
      <Button type="submit" style={{ marginTop: 30 }}>
        저장하기
      </Button>
    </form>
  );
};

export default PasswordPage;
