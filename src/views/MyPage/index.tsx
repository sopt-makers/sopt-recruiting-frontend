import { isAfter, isBefore } from 'date-fns';
import { useContext } from 'react';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import BigLoading from 'views/loadings/BigLoding';

import useGetMyInfo from './hooks/useGetMyInfo';
import { buttonWidth, container, infoContainer, infoLabel, infoValue, itemWrapper, buttonValue } from './style.css';

const MyInfoItem = ({ label, value }: { label: string; value?: string | number | boolean }) => {
  return (
    <li className={itemWrapper}>
      <span className={infoLabel}>{label}</span>
      <span className={infoValue}>{value}</span>
    </li>
  );
};

const MyPage = ({ onShowReview }: { onShowReview: () => void }) => {
  const {
    recruitingInfo: { applicationPassConfirmStart, applicationPassConfirmEnd },
  } = useContext(RecruitingInfoContext);
  const { myInfoData, myInfoIsLoading } = useGetMyInfo();

  if (myInfoIsLoading) return <BigLoading />;

  const { season, name, part } = myInfoData?.data || {};

  const beforeScreeningResult = isAfter(new Date(applicationPassConfirmStart || ''), new Date());
  const afterScreeningResult = isBefore(new Date(applicationPassConfirmEnd || ''), new Date());
  const isScreeningResultTime = !(beforeScreeningResult || afterScreeningResult);

  return (
    <section className={container}>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol className={infoContainer}>
        <MyInfoItem label="기수" value={season} />
        <MyInfoItem label="이름" value={name} />
        <MyInfoItem label="지원파트" value={part} />
        {!isScreeningResultTime && <MyInfoItem label="지원상태" value="지원 완료" />}
        {isScreeningResultTime && (
          <li className={buttonValue}>
            <span className={infoLabel}>지원상태</span>
            <Button isLink to="/result" className={buttonWidth} padding="15x25">
              결과 확인
            </Button>
          </li>
        )}
        <li className={buttonValue}>
          <span className={infoLabel}>지원서</span>
          <Button className={buttonWidth} onClick={onShowReview} padding="15x25">
            지원서 확인
          </Button>
        </li>
      </ol>
    </section>
  );
};

export default MyPage;
