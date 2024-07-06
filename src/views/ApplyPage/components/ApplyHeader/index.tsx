import Button from '@components/Button';
import Title from '@components/Title';

import { buttonWrapper, headerContainer } from './style.css';

const ApplyHeader = ({ isLoading, onSaveDraft }: { isLoading: boolean; onSaveDraft: () => void }) => {
  return (
    <header className={headerContainer}>
      <Title>35기 YB 지원서</Title>
      <div className={buttonWrapper}>
        <Button isLoading={isLoading} onClick={onSaveDraft} buttonStyle="line" padding="10x24">
          임시저장
        </Button>
        <Button isLoading={isLoading} padding="10x24" type="submit">
          제출하기
        </Button>
      </div>
    </header>
  );
};

export default ApplyHeader;
