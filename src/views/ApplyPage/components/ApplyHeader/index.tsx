import Button from '@components/Button';
import Title from '@components/Title';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import { buttonWrapper, headerContainerVar } from './style.css';

interface ApplyHeaderProps {
  isReview?: boolean;
  isLoading?: boolean;
  onSaveDraft?: () => void;
  onSubmitData?: () => void;
}

const ApplyHeader = ({ isLoading, onSaveDraft, onSubmitData, isReview = false }: ApplyHeaderProps) => {
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { soptName, season, group, isMakers },
  } = useRecruitingInfo();

  return (
    <header className={headerContainerVar[deviceType]}>
      <Title>
        {season}기 {isMakers ? soptName : group} 지원서
      </Title>
      {!isReview && deviceType !== 'MOB' && (
        <div className={buttonWrapper}>
          <Button
            isLoading={isLoading}
            eventName="click-apply-draft"
            onClick={onSaveDraft}
            buttonStyle="line"
            padding="10x24">
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
