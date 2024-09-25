import { useQuery } from '@tanstack/react-query';

import { getRecruitingInfo } from '@apis/getRecruitingInfo';

import type { RecruitingResponse } from '@type/recruitingInfo';
import type { CustomError } from '@apis/fetcher';

const useGetRecruitingInfo = () => {
  const { data, isLoading } = useQuery<RecruitingResponse, CustomError, RecruitingResponse, string[]>({
    queryKey: ['get-recruiting-info'],
    queryFn: getRecruitingInfo,
  });

  return { data, isLoading };
};

export default useGetRecruitingInfo;
