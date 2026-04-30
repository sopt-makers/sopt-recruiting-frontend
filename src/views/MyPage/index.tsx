import { reset } from '@amplitude/analytics-browser';
import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { useRecruitingInfo } from 'contexts/RecruitingInfoProvider';
import BigLoading from 'views/loadings/BigLoding';
import IconGhost from 'views/ErrorPage/icons/IconGhost';

import {
  itemWrapper,
  buttonValue,
  containerVar,
  infoContainerVar,
  infoLabelVar,
  infoValueVar,
  buttonWidthVar,
  emptyContainerVar,
  emptyText,
  logoutButtonVar,
} from './style.css';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const MyInfoItem = ({ label, value }: { label: string; value?: string | number | boolean }) => {
  const isMasking = label !== '지원서';

  return (
    <li className={itemWrapper}>
      <span className={infoLabelVar}>{label}</span>
      <span className={`${isMasking ? 'amp-mask' : ''} ${infoValueVar}`}>{value}</span>
    </li>
  );
};

const StatusButton = ({
  label,
  to,
  trackingEvent,
  buttonStyle = 'solid',
  children,
}: {
  label: string;
  to: string;
  trackingEvent: string;
  buttonStyle?: 'solid' | 'line';
  children: string;
}) => {
  return (
    <li className={buttonValue}>
      <span className={infoLabelVar}>{label}</span>
      <Button
        isLink
        to={to}
        className={buttonWidthVar}
        eventName={trackingEvent}
        padding="15x25"
        buttonStyle={buttonStyle}>
        {children}
      </Button>
    </li>
  );
};

interface MyPageProps {
  part?: string;
  applicationPass?: boolean;
  hasDraft?: boolean;
  submit?: boolean;
}

const MyPage = ({ part, applicationPass, hasDraft = false, submit = false }: MyPageProps) => {
  const navigate = useNavigate();
  const {
    recruitingInfo: { name, season },
  } = useRecruitingInfo();
  const { NoMoreReview, NoMoreScreeningResult, NoMoreFinalResult, NoMoreRecruit, isLoading } = useRecruitingSchedule();

  const handleLogout = () => {
    reset();
    localStorage.removeItem('soptApplyAccessToken');
    localStorage.removeItem('soptApplyAccessTokenExpiredTime');
    navigate('/');
  };

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit) return <NoMore isMakers={__IS_MAKERS__} content="모집 기간이 아니에요" />;

  if (!hasDraft) {
    return (
      <section className={containerVar}>
        <Title>지원 현황</Title>
        <div className={emptyContainerVar}>
          <IconGhost size={140} color="#C3C3C6" />
          <span className={emptyText}>지원한 내역이 없어요</span>
          <Button isLink to="/" padding="15x25">
            메인화면으로 이동
          </Button>
        </div>
        <button className={logoutButtonVar} onClick={handleLogout}>
          로그아웃
        </button>
      </section>
    );
  }

  const renderApplicationStatus = () => {
    if (!submit) {
      return <MyInfoItem label="지원상태" value="미제출" />;
    }
    if (!NoMoreScreeningResult) {
      return (
        <StatusButton label="지원상태" to="/result" trackingEvent="click-my-result">
          결과 확인
        </StatusButton>
      );
    }
    if (!NoMoreFinalResult) {
      return applicationPass ? (
        <StatusButton label="지원상태" to="/result" trackingEvent="click-my-result">
          결과 확인
        </StatusButton>
      ) : (
        <MyInfoItem label="지원상태" value="서류 불합격" />
      );
    }
    return (
      <MyInfoItem
        label="지원상태"
        value={applicationPass == null ? '제출 완료' : applicationPass ? '서류 합격' : '서류 불합격'}
      />
    );
  };

  return (
    <section className={containerVar}>
      <Title>지원 현황</Title>
      <Callout>{`면접 종료 후에는 지원서를 열람할 수 없으니, 사본을 보관해 주시기 바랍니다.`}</Callout>
      <ol className={infoContainerVar}>
        <MyInfoItem label="기수" value={season} />
        <MyInfoItem label="이름" value={name} />
        <MyInfoItem label="지원파트" value={part} />
        {renderApplicationStatus()}
        {NoMoreReview ? (
          <MyInfoItem label="지원서" value="제출 완료" />
        ) : submit ? (
          <StatusButton label="지원서" to="/review" trackingEvent="click-my-review" buttonStyle="line">
            지원서 확인
          </StatusButton>
        ) : (
          <StatusButton label="지원서" to="/review" trackingEvent="click-my-review" buttonStyle="line">
            계속 작성하기
          </StatusButton>
        )}
      </ol>
      <button className={logoutButtonVar} onClick={handleLogout}>
        로그아웃
      </button>
    </section>
  );
};

export default MyPage;
