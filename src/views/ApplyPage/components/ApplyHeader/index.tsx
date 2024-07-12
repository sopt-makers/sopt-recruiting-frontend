import { useContext } from 'react';

import Button from '@components/Button';
import Title from '@components/Title';
import { UserInfoContext, UserInfoContextType } from '@store/userInfoContext';

import { buttonWrapper, headerContainer } from './style.css';

const ApplyHeader = ({ isLoading, onSaveDraft }: { isLoading: boolean; onSaveDraft: () => void }) => {
  const {
    userInfo: { season, group },
  }: UserInfoContextType = useContext(UserInfoContext);

  return (
    <header className={headerContainer}>
      <Title>
        {season}기 {group} 지원서
      </Title>
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
