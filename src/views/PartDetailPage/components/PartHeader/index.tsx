import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@sopt-makers/ui';

import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { format } from '@utils/dateFormatter';
import { wrapper, wrapperScrolled, inner, divider, button, dateText, partText } from './style.css';

interface Props {
  partName: string;
}

const PartHeader = ({ partName }: Props) => {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [naturalHeight, setNaturalHeight] = useState<number | undefined>();
  const [isScrolled, setIsScrolled] = useState(false);

  const { applicationStart, applicationEnd, NoMoreApply } = useRecruitingSchedule();
  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();

  const formattedStart = applicationStart ? format(new Date(applicationStart), 'YYYY.MM.dd') : '';
  const formattedEnd = applicationEnd ? format(new Date(applicationEnd), 'YYYY.MM.dd') : '';

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      setNaturalHeight(wrapperRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={isScrolled ? wrapperScrolled : wrapper}
      style={{
        height: isScrolled ? undefined : naturalHeight,
        transition: naturalHeight !== undefined ? 'height 0.3s ease, padding 0.3s ease' : undefined,
      }}>
      <div className={inner}>
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
      <div className={divider} />
    </div>
  );
};

export default PartHeader;
