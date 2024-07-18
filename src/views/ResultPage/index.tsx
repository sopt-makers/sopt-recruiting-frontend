import { useContext, useEffect } from 'react';

import useDate from '@hooks/useDate';
import { ThemeContext } from '@store/themeContext';
import BigLoading from 'views/loadings/BigLoding';

import FinalResult from './components/FinalResult';
import ScreeningResult from './components/ScreeningResult';

const ResultPage = () => {
  const { handleChangeMode } = useContext(ThemeContext);
  const { NoMoreRecruit, NoMoreScreeningResult, NoMoreFinalResult, isLoading } = useDate();

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  if (isLoading) return <BigLoading />;

  if (NoMoreRecruit || (NoMoreScreeningResult && NoMoreFinalResult)) return <>확인 기간이 아니에요.</>;

  return (
    <>
      {!NoMoreScreeningResult && <ScreeningResult />}
      {!NoMoreFinalResult && <FinalResult />}
    </>
  );
};

export default ResultPage;
