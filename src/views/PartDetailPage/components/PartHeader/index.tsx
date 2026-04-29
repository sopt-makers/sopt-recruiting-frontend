import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useDate from '@hooks/useDate';
import { format } from '@utils/dateFormatter';
import { wrapper, button, dateText, partText } from './style.css';
import { Button } from '@sopt-makers/ui';

interface Props {
  partName: string;
}

const PartHeader = ({ partName }: Props) => {
  const { applicationStart, applicationEnd, NoMoreApply } = useDate();

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

      <Button className={button} disabled={NoMoreApply}>{NoMoreApply ? '모집 마감' : '지원하기'}</Button>
    </div>
  );
};

export default PartHeader;
