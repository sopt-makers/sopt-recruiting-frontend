import useDate from '@hooks/useDate';
import { Button, Tag } from '@sopt-makers/ui';
import { format } from '@utils/dateFormatter';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import NotificationInput from 'views/IntroducePage/components/ApplyHeader/components/NotificationInput';
import {
  titleVar,
  wrapper,
  buttonVar,
  recruitingHeaderContainerVar,
  dateVar,
  recruitmentInfoVar,
  recruitingHeaderContentVar,
  notificationContainerVar,
  recruitingHeaderImageWrapperVar,
  recruitingHeaderImageVar,
  buttonWrapper,
  buttonWrapperInner,
  recruitingHeaderContentInner,
} from './style.css';

import { useDevice } from '@hooks/useDevice';
import IconArrowsS from 'views/IntroducePage/assets/IconArrowsS';
import IconArrowsL from 'views/IntroducePage/assets/IconArrowsL';

const ApplyHeader = () => {
  const { NoMoreRecruit, NoMoreApply } = useDate();

  const deviceType = useDevice();

  return (
    <div className={wrapper}>
      {NoMoreRecruit || NoMoreApply ? <Notification /> : <RecruitingHeader />}
      {deviceType === 'DESK' ? <IconArrowsL /> : <IconArrowsS />}
    </div>
  );
};

export default ApplyHeader;

const RecruitingHeader = () => {
  const {
    recruitingInfo: { season, group },
  } = useRecruitingInfo();
  const { applicationStart, applicationEnd } = useDate();

  const formattedApplicationStart = format(new Date(applicationStart || ''), 'YYYY.MM.dd');
  const formattedApplicationEnd = format(new Date(applicationEnd || ''), 'YYYY.MM.dd');

  return (
    <header className={recruitingHeaderContainerVar}>
      <div className={recruitingHeaderImageWrapperVar}>
        <img src={'/top_banner.png'} alt="recruiting header" className={recruitingHeaderImageVar} />
      </div>
      <div className={recruitingHeaderContentVar}>
        <div className={recruitingHeaderContentInner}>
          <h1 className={titleVar}>{`SOPT의 ${season}번째 열정을 기다리고 있어요!`}</h1>
          <div className={recruitmentInfoVar}>
            <Tag variant="secondary" size="lg">{`${group} 모집`}</Tag>
            <span className={dateVar}>{`${formattedApplicationStart}~${formattedApplicationEnd}`}</span>
          </div>
        </div>
        <div className={buttonWrapper}>
          <div className={buttonWrapperInner}>
            <Button theme="blue" rounded="lg" onClick={() => {}} className={buttonVar}>
              지원하기
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Notification = () => {
  return (
    <header className={notificationContainerVar}>
      <h1 className={titleVar}>{`지금은 모집 기간이 아니에요.\n모집 기간이 되면 메일로 알려드릴게요.`}</h1>
      <NotificationInput />
    </header>
  );
};
