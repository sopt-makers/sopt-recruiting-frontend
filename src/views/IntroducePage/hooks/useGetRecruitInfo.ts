import { useQuery } from '@tanstack/react-query';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';
import { getRecruitInfo } from 'views/IntroducePage/apis';
import type { RecruitInfoResponse } from 'views/IntroducePage/types';

const useGetRecruitInfo = () => {
  const { data: recruitData } = useQuery<
    AxiosResponse<RecruitInfoResponse, null>,
    AxiosError<ErrorResponse, null>,
    RecruitInfoResponse,
    string[]
  >({
    queryKey: ['get-recruit-info'],
    queryFn: getRecruitInfo,
    select: (response) => response.data,
  });

  return { recruitData };
};

export default useGetRecruitInfo;
