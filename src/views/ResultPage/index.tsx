import { isAfter, isBefore } from 'date-fns';
import { useContext, useEffect } from 'react';

import { RecruitingInfoContext } from '@store/recruitingInfoContext';
import { ThemeContext } from '@store/themeContext';

import FinalResult from './components/FinalResult';
import ScreeningResult from './components/ScreeningResult';

const ResultPage = () => {
  const { handleChangeMode } = useContext(ThemeContext);
  const {
    recruitingInfo: {
      applicationPassConfirmStart,
      applicationPassConfirmEnd,
      finalPassConfirmStart,
      finalPassConfirmEnd,
    },
  } = useContext(RecruitingInfoContext);

  useEffect(() => {
    handleChangeMode('dark');

    return () => {
      handleChangeMode('light');
    };
  }, [handleChangeMode]);

  const beforeScreeningResult = isAfter(new Date(applicationPassConfirmStart || ''), new Date());
  const afterScreeningResult = isBefore(new Date(applicationPassConfirmEnd || ''), new Date());
  const isScreeningResultTime = !(beforeScreeningResult || afterScreeningResult);

  const beforeFinalResult = isAfter(new Date(finalPassConfirmStart || ''), new Date());
  const afterFinalResult = isBefore(new Date(finalPassConfirmEnd || ''), new Date());
  const isFinalResultTime = !(beforeFinalResult || afterFinalResult);

  if (!isScreeningResultTime && !isFinalResultTime) return <>확인 기간이 아니에요.</>;

  return (
    <>
      {isScreeningResultTime && <ScreeningResult />}
      {isFinalResultTime && <FinalResult />}
    </>
  );
};

export default ResultPage;
