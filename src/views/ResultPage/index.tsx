import { useContext, useEffect } from 'react';

import useDate from '@hooks/useDate';
import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';
import NoMore from 'views/ErrorPage/components/NoMore';
import BigLoading from 'views/loadings/BigLoding';

import FinalResult from './components/FinalResult';
import ScreeningResult from './components/ScreeningResult';

const ResultPage = () => {
  const { handleSaveRecruitingInfo } = useContext(RecruitingInfoContext);
  const { handleChangeMode } = useContext(ThemeContext);

  const {
    name: soptName,
    season,
    group,
    obApplicationPassConfirmStart,
    ybApplicationPassConfirmStart,
    NoMoreRecruit,
    NoMoreScreeningResult,
    NoMoreFinalResult,
    isLoading,
    isMakers,
  } = useDate();

  const applicationPassConfirmStart = group === 'OB' ? obApplicationPassConfirmStart : ybApplicationPassConfirmStart;

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  useEffect(() => {
    handleSaveRecruitingInfo({
      soptName,
      season,
      group,
      applicationPassConfirmStart,
    });
  }, [soptName, season, group, applicationPassConfirmStart, handleSaveRecruitingInfo]);

  if (isLoading) return <BigLoading />;
  if (NoMoreRecruit || (NoMoreScreeningResult && NoMoreFinalResult))
    return <NoMore isMakers={isMakers} content="합불 확인 기간이 아니에요" />;

  return (
    <>
      {!NoMoreScreeningResult && <ScreeningResult />}
      {!NoMoreFinalResult && <FinalResult />}
    </>
  );
};

export default ResultPage;
