import { track } from '@amplitude/analytics-browser';
import { MouseEvent, useContext } from 'react';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { useDevice } from '@hooks/useDevice';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import {
  itemWrapper,
  buttonValue,
  containerVar,
  infoContainerVar,
  infoLabelVar,
  infoValueVar,
  buttonWidthVar,
} from './style.css';

const MyInfoItem = ({ label, value }: { label: string; value?: string | number | boolean }) => {
  const isMasking = label !== '지원서';

  const DEVICE_TYPE = useDevice();

  return (
    <li className={itemWrapper}>
      <span className={infoLabelVar[DEVICE_TYPE]}>{label}</span>
      <span className={`${isMasking ? 'amp-mask' : ''} ${infoValueVar[DEVICE_TYPE]}`}>{value}</span>
    </li>
  );
};

const StatusButton = ({ label, to, trackingEvent }: { label: string; to: string; trackingEvent: string }) => {
  const DEVICE_TYPE = useDevice();

  const handlePreventMobile = (e: MouseEvent<HTMLButtonElement>) => {
    track(trackingEvent);
    if (label === '지원상태') return;

    const isMobile = /Mobi/i.test(window.navigator.userAgent);
    if (isMobile) {
      alert('PC로 이용해주세요.');
      e.preventDefault();
      return;
    }
    if (DEVICE_TYPE !== 'DESK') {
      alert('전체화면 이용을 권장드려요.');
      return;
    }
  };

  return (
    <li className={buttonValue}>
      <span className={infoLabelVar[DEVICE_TYPE]}>{label}</span>
      <Button isLink to={to} className={buttonWidthVar[DEVICE_TYPE]} onClick={handlePreventMobile} padding="15x25">
        {label === '지원서' ? '지원서 확인' : '결과 확인'}
      </Button>
    </li>
  );
};

interface MyPageProps {
  part?: string;
  applicationPass?: boolean;
}

const MyPage = ({ part, applicationPass }: MyPageProps) => {
  const DEVICE_TYPE = useDevice();
  const {
    recruitingInfo: { name, season },
  } = useContext(RecruitingInfoContext);
  const { NoMoreReview, NoMoreScreeningResult, NoMoreFinalResult, NoMoreRecruit, isLoading, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <section className={containerVar[DEVICE_TYPE]}>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol className={infoContainerVar[DEVICE_TYPE]}>
        <MyInfoItem label="기수" value={season} />
        <MyInfoItem label="이름" value={name} />
        <MyInfoItem label="지원파트" value={part} />
        {NoMoreScreeningResult && NoMoreFinalResult && (
          <MyInfoItem
            label="지원상태"
            value={applicationPass == null ? '제출 완료' : applicationPass ? '서류 합격' : '서류 불합격'}
          />
        )}
        {!NoMoreScreeningResult && <StatusButton label="지원상태" to="/result" trackingEvent="click-my-result" />}
        {!NoMoreFinalResult &&
          (applicationPass ? (
            <StatusButton label="지원상태" to="/result" trackingEvent="click-my-result" />
          ) : (
            <MyInfoItem label="지원상태" value="서류 불합격" />
          ))}
        {NoMoreReview ? (
          <MyInfoItem label="지원서" value="제출 완료" />
        ) : (
          <StatusButton label="지원서" to="/review" trackingEvent="click-my-review" />
        )}
      </ol>
    </section>
  );
};

export default MyPage;
