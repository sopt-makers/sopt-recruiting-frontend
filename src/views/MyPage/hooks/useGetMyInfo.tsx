import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { getMyInfo } from '../apis';

import type { MyError, MyResponse } from '../types';

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
