import { lazy } from 'react';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { useDeviceType } from 'contexts/DeviceTypeProvider';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
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

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const MyInfoItem = ({ label, value }: { label: string; value?: string | number | boolean }) => {
  const { deviceType } = useDeviceType();
  const isMasking = label !== '지원서';

  return (
    <li className={itemWrapper}>
      <span className={infoLabelVar[deviceType]}>{label}</span>
      <span className={`${isMasking ? 'amp-mask' : ''} ${infoValueVar[deviceType]}`}>{value}</span>
    </li>
  );
};

const StatusButton = ({ label, to, trackingEvent }: { label: string; to: string; trackingEvent: string }) => {
  const { deviceType } = useDeviceType();

  return (
    <li className={buttonValue}>
      <span className={infoLabelVar[deviceType]}>{label}</span>
      <Button isLink to={to} className={buttonWidthVar[deviceType]} eventName={trackingEvent} padding="15x25">
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
  const { deviceType } = useDeviceType();
  const {
    recruitingInfo: { name, season },
  } = useRecruitingInfo();
  const { NoMoreReview, NoMoreScreeningResult, NoMoreFinalResult, NoMoreRecruit, isLoading, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <section className={containerVar[deviceType]}>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol className={infoContainerVar[deviceType]}>
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
