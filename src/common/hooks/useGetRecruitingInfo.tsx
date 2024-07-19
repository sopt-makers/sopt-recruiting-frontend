import { useQuery } from '@tanstack/react-query';

import { getRecruitingInfo } from '@apis/getRecruitingInfo';

import type { ErrorResponse } from '@type/errorResponse';
import type { RecruitingResponse } from '@type/recruitingInfo';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetRecruitingInfo = () => {
  const { data, isLoading } = useQuery<
    AxiosResponse<RecruitingResponse, null>,
    AxiosError<ErrorResponse, null>,
    AxiosResponse<RecruitingResponse, null>,
    string[]
  >({
    queryKey: ['get-recruiting-info'],
    queryFn: getRecruitingInfo,
  });

  return { data, isLoading };
};

export default useGetRecruitingInfo;
