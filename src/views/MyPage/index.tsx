import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';

const MyInfoItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{value}</span>
    </li>
  );
};

const MyPage = () => {
  return (
    <>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol>
        <MyInfoItem label="기수" value="34기" />
        <MyInfoItem label="이름" value="김솝트" />
        <MyInfoItem label="지원파트" value="디자인" />
        <MyInfoItem label="지원상태" value="지원 완료" />
        <li>
          <span>지원서</span>
          <Button padding="15x25">지원서 확인</Button>
        </li>
      </ol>
    </>
  );
};

export default MyPage;
