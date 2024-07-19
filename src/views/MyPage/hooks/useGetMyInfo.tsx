import { useQuery } from '@tanstack/react-query';

import { getMyInfo } from '../apis';

import type { MyResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetMyInfo = () => {
  const { data: myInfoData, isLoading: myInfoIsLoading } = useQuery<
    AxiosResponse<MyResponse, null>,
    AxiosError<ErrorResponse, null>,
    AxiosResponse<MyResponse, null>,
    string[]
  >({
    queryKey: ['my'],
    queryFn: getMyInfo,
  });

  return { myInfoData, myInfoIsLoading };
};

export default useGetMyInfo;
