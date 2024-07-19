import { useQuery } from '@tanstack/react-query';

import { getScreeningResult } from '../apis';

import type { ScreeningResultResponse } from '../../MyPage/types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetScreeningResult = () => {
  const { data: screeningResult, isLoading: screeningResultIsLoading } = useQuery<
    AxiosResponse<ScreeningResultResponse, null>,
    AxiosError<ErrorResponse, null>,
    AxiosResponse<ScreeningResultResponse, null>,
    string[]
  >({
    queryKey: ['screening-result'],
    queryFn: getScreeningResult,
  });

  return { screeningResult, screeningResultIsLoading };
};

export default useGetScreeningResult;
