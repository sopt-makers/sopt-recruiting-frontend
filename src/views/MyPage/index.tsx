import { track } from '@amplitude/analytics-browser';
import { useContext } from 'react';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import useDate from '@hooks/useDate';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import { buttonWidth, container, infoContainer, infoLabel, infoValue, itemWrapper, buttonValue } from './style.css';

const MyInfoItem = ({ label, value }: { label: string; value?: string | number | boolean }) => {
  return (
    <li className={itemWrapper}>
      <span className={infoLabel}>{label}</span>
      <span className={infoValue}>{value}</span>
    </li>
  );
};

interface MyPageProps {
  part?: string;
}

const MyPage = ({ part }: MyPageProps) => {
  const {
    recruitingInfo: { name, season },
  } = useContext(RecruitingInfoContext);
  const { NoMoreReview, NoMoreScreeningResult, NoMoreFinalResult, NoMoreRecruit, isLoading, isMakers } = useDate();

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={isMakers} content="모집 기간이 아니에요" />;

  return (
    <section className={container}>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol className={infoContainer}>
        <MyInfoItem label="기수" value={season} />
        <MyInfoItem label="이름" value={name} />
        <MyInfoItem label="지원파트" value={part} />
        {NoMoreScreeningResult && NoMoreFinalResult && <MyInfoItem label="지원상태" value="지원 완료" />}
        {(!NoMoreScreeningResult || !NoMoreFinalResult) && (
          <li className={buttonValue}>
            <span className={infoLabel}>지원상태</span>
            <Button
              isLink
              to="/result"
              className={buttonWidth}
              onClick={() => track('click-my-result')}
              padding="15x25">
              결과 확인
            </Button>
          </li>
        )}
        {!NoMoreReview && (
          <li className={buttonValue}>
            <span className={infoLabel}>지원서</span>
            <Button
              isLink
              to="/review"
              className={buttonWidth}
              onClick={() => track('click-my-review')}
              padding="15x25">
              지원서 확인
            </Button>
          </li>
        )}
        {NoMoreReview && <MyInfoItem label="지원서" value="제출 완료" />}
      </ol>
    </section>
  );
};

export default MyPage;
