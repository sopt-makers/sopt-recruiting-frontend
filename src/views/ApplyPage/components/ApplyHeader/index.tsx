import Button from '@components/Button';
import Title from '@components/Title';

import { buttonWrapper, headerContainer } from './style.css';

const ApplyHeader = () => {
  return (
    <header className={headerContainer}>
      <Title>34기 YB 지원서</Title>
      <div className={buttonWrapper}>
        <Button buttonStyle="line" padding="10x24">
          임시저장
        </Button>
        <Button padding="10x24">제출하기</Button>
      </div>
    </header>
  );
};

export default ApplyHeader;
