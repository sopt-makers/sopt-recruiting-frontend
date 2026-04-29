import Button from '@components/Button';
import Title from '@components/Title';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';

import { buttonWrapper, desktopButtons, headerContainerVar } from './style.css';

interface ApplyHeaderProps {
  isReview?: boolean;
  isLoading?: boolean;
  onSaveDraft?: () => void;
  onSubmitData?: () => void;
}

const ApplyHeader = ({ isLoading, onSaveDraft, onSubmitData, isReview = false }: ApplyHeaderProps) => {
  const {
    recruitingInfo: { soptName, season, group },
  } = useRecruitingInfo();

  return (
    <header className={headerContainerVar}>
      <Title>
        {season}기 {__IS_MAKERS__ ? soptName : group} 지원서
      </Title>
      {!isReview && (
        <div className={`${buttonWrapper} ${desktopButtons}`}>
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
