import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { format } from '@utils/dateFormatter';
import { wrapper, button, dateText, partText } from './style.css';
import { Button } from '@sopt-makers/ui';
import { useNavigate } from 'react-router-dom';

interface Props {
  partName: string;
}

const PartHeader = ({ partName }: Props) => {
  const navigate = useNavigate();

  const { applicationStart, applicationEnd, NoMoreApply } = useRecruitingSchedule();

  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();

  const formattedStart = applicationStart ? format(new Date(applicationStart), 'YYYY.MM.dd') : '';
  const formattedEnd = applicationEnd ? format(new Date(applicationEnd), 'YYYY.MM.dd') : '';

  return (
    <div className={wrapper}>
      <div>
        <p className={partText}>
          {season}기 {group} {partName} 파트
        </p>
        <p className={dateText}>
          모집 기간 {formattedStart} ~ {formattedEnd}
        </p>
      </div>

      <Button className={button} disabled={NoMoreApply} onClick={() => navigate('/auth')}>
        {NoMoreApply ? '모집 마감' : '지원하기'}
      </Button>
    </div>
  );
};

export default PartHeader;
