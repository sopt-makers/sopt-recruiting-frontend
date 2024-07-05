import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import Button from '@components/Button';
import Callout from '@components/Callout';
import Title from '@components/Title';
import BigLoading from 'views/loadings/BigLoding';

import { getMyInfo } from './apis';
import { container, infoContainer, infoLabel, infoValue, itemWrapper, lastItemWrapper } from './style.css';
import { MyError, MyResponse } from './types';

const MyInfoItem = ({ label, value }: { label: string; value: string | number | boolean }) => {
  return (
    <li className={itemWrapper}>
      <span className={infoLabel}>{label}</span>
      <span className={infoValue}>{value}</span>
    </li>
  );
};

const MyPage = () => {
  const { data, isLoading } = useQuery<
    AxiosResponse<MyResponse, null>,
    AxiosError<MyError, null>,
    AxiosResponse<MyResponse, null>,
    string[]
  >({
    queryKey: ['my'],
    queryFn: getMyInfo,
  });

  if (isLoading) return <BigLoading />;

  const { season, name, part, submit } = data!.data;

  return (
    <section className={container}>
      <Title>지원 현황</Title>
      <Callout>{`지원서는 면접 이후부터 열람이 불가하오니\n백업해두시길 바랍니다.`}</Callout>
      <ol className={infoContainer}>
        <MyInfoItem label="기수" value={season} />
        <MyInfoItem label="이름" value={name} />
        <MyInfoItem label="지원파트" value={part} />
        <MyInfoItem label="지원상태" value={submit} />
        <li className={lastItemWrapper}>
          <span className={infoLabel}>지원서</span>
          <Button padding="15x25">지원서 확인</Button>
        </li>
      </ol>
    </section>
  );
};

export default MyPage;
