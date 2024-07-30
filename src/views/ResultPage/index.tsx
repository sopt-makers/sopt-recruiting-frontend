import { useContext, useEffect } from 'react';

import useDate from '@hooks/useDate';
import { ThemeContext } from '@store/themeContext';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';
import useGetMyInfo from 'views/SignedInPage/hooks/useGetMyInfo';

import FinalResult from './components/FinalResult';
import ScreeningResult from './components/ScreeningResult';

const ResultPage = () => {
  const { handleChangeMode } = useContext(ThemeContext);
  const { myInfoData, myInfoIsLoading } = useGetMyInfo();
  const { submit, applicationPass } = myInfoData?.data || {};

  const { NoMoreRecruit, NoMoreScreeningResult, NoMoreFinalResult, isLoading, isMakers } = useDate();

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  if (isLoading || myInfoIsLoading) return <BigLoading />;
  if (!submit || NoMoreRecruit || (NoMoreScreeningResult && NoMoreFinalResult))
    return <NoMore isMakers={isMakers} content="합불 확인 기간이 아니에요" />;

  return (
    <>
      {!NoMoreScreeningResult && <ScreeningResult />}
      {!NoMoreFinalResult &&
        (applicationPass ? <FinalResult /> : <NoMore isMakers={isMakers} content="합불 확인 기간이 아니에요" />)}
    </>
  );
};

export default ResultPage;
