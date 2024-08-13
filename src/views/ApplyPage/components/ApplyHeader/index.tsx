import { useContext } from 'react';

import Button from '@components/Button';
import Title from '@components/Title';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';

import { buttonWrapper, headerContainerVar } from './style.css';

interface ApplyHeaderProps {
  isReview: boolean;
  isLoading?: boolean;
  onSaveDraft?: () => void;
  onSubmitData?: () => void;
}

const ApplyHeader = ({ isReview, isLoading, onSaveDraft, onSubmitData }: ApplyHeaderProps) => {
  const DEVICE_TYPE = useDevice();
  const {
    recruitingInfo: { soptName, season, group, isMakers },
  } = useContext(RecruitingInfoContext);

  return (
    <header className={headerContainerVar[DEVICE_TYPE]}>
      <Title>
        {season}기 {isMakers ? soptName : group} 지원서
      </Title>
      {!isReview && DEVICE_TYPE !== 'MOB' && (
        <div className={buttonWrapper}>
          <Button isLoading={isLoading} onClick={onSaveDraft} buttonStyle="line" padding="10x24">
            임시저장
          </Button>
          <Button isLoading={isLoading} onClick={onSubmitData} padding="10x24" type="submit">
            제출하기
          </Button>
        </div>
      )}
    </header>
  );
};

export default ApplyHeader;
