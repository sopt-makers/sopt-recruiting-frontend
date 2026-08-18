import { useEffect, lazy } from 'react';

import useRecruitingSchedule from '@hooks/useRecruitingSchedule';
import { useTheme } from 'contexts/ThemeProvider';
import BigLoading from 'views/loadings/BigLoding';
import useGetMyInfo from 'views/SignedInPage/hooks/useGetMyInfo';

import MakersFinalResult from './components/MakersFinalResult';
import ScreeningResult from './components/ScreeningResult';
import SoptFinalResult from './components/SoptFinalResult';

const NoMore = lazy(() => import('views/ErrorPage/components/NoMore'));

const ResultPage = () => {
  const { handleChangeMode } = useTheme();
  const { myInfoData, myInfoIsLoading } = useGetMyInfo();
  const { submit, applicationPass } = myInfoData?.data || {};

  const { NoMoreRecruit, NoMoreScreeningResult, NoMoreFinalResult, isLoading } = useRecruitingSchedule();

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  if (isLoading || myInfoIsLoading) return <BigLoading />;
  if (!submit || NoMoreRecruit || (NoMoreScreeningResult && NoMoreFinalResult))
    return <NoMore isMakers={__IS_MAKERS__} content="합불 확인 기간이 아니에요" />;

  return (
    <>
      {!NoMoreScreeningResult && <ScreeningResult />}
      {!NoMoreFinalResult &&
        (applicationPass ? (
          __IS_MAKERS__ ? (
            <MakersFinalResult />
          ) : (
            <SoptFinalResult />
          )
        ) : (
          <NoMore isMakers={__IS_MAKERS__} content="합불 확인 기간이 아니에요" />
        ))}
    </>
  );
};

export default ResultPage;
