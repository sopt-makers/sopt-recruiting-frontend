import { useQuery } from '@tanstack/react-query';

import { getFinalResult } from '../apis';

import type { FinalResultResponse, MyError } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetFinalResult = () => {
  const { data: finalResult, isLoading: finalResultIsLoading } = useQuery<
    AxiosResponse<FinalResultResponse, null>,
    AxiosError<MyError, null>,
    AxiosResponse<FinalResultResponse, null>,
    string[]
  >({
    queryKey: ['final-result'],
    queryFn: getFinalResult,
  });

  return { finalResult, finalResultIsLoading };
};

export default useGetFinalResult;
