import { useQuery } from '@tanstack/react-query';

import { getMyInfo } from '../apis';

import type { MyError, MyResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetMyInfo = () => {
  const { data: myInfoData, isLoading: myInfoIsLoading } = useQuery<
    AxiosResponse<MyResponse, null>,
    AxiosError<MyError, null>,
    AxiosResponse<MyResponse, null>,
    string[]
  >({
    queryKey: ['my'],
    queryFn: getMyInfo,
  });

  return { myInfoData, myInfoIsLoading };
};

export default useGetMyInfo;
