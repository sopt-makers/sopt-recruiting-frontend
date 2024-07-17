import { useQuery } from '@tanstack/react-query';

import { getRecruitingInfo } from '@apis/getRecruitingInfo';

import type { RecruitingError, RecruitingResponse } from '@type/types';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetRecruitingInfo = () => {
  const { data, isLoading } = useQuery<
    AxiosResponse<RecruitingResponse, null>,
    AxiosError<RecruitingError, null>,
    AxiosResponse<RecruitingResponse, null>,
    string[]
  >({
    queryKey: ['get-recruiting-info'],
    queryFn: getRecruitingInfo,
  });

  return { data, isLoading };
};

export default useGetRecruitingInfo;
