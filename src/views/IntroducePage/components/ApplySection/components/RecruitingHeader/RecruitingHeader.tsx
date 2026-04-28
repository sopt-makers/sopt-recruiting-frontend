import useDate from '@hooks/useDate';
import { useDevice } from '@hooks/useDevice';
import { Button, Tag } from '@sopt-makers/ui';
import { format } from '@utils/dateFormatter';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import { useNavigate } from 'react-router-dom';
import {
  container,
  imageWrapper,
  image,
  contentLayout,
  textContentLayout,
  title,
  recruitmentInfo,
  date,
  buttonWrapper,
  buttonWrapperInner,
  button,
} from './style.css';

const RecruitingHeader = () => {
  const navigate = useNavigate();
  const deviceType = useDevice();

  const { applicationStart, applicationEnd } = useDate();

  const formattedApplicationStart = format(new Date(applicationStart || ''), 'YYYY.MM.dd');
  const formattedApplicationEnd = format(new Date(applicationEnd || ''), 'YYYY.MM.dd');

  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();

  return (
    <header className={container}>
      <div className={imageWrapper}>
        <img src={'/top_banner.png'} alt="recruiting header" className={image} />
      </div>
      <div className={contentLayout}>
        <div className={textContentLayout}>
          <h1 className={title}>{`SOPT의 ${season}번째 열정을 기다리고 있어요!`}</h1>
          <div className={recruitmentInfo}>
            <Tag variant="secondary" size={deviceType === 'DESK' ? 'lg' : 'sm'}>{`${group} 모집`}</Tag>
            <span className={date}>{`${formattedApplicationStart}~${formattedApplicationEnd}`}</span>
          </div>
        </div>
        <div className={buttonWrapper}>
          <div className={buttonWrapperInner}>
            <Button theme="blue" rounded="lg" onClick={() => navigate('/auth')} className={button}>
              지원하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RecruitingHeader;
