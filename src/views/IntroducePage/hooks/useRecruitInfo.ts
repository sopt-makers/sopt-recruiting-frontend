import { recruitInfoQueryKey } from '@constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getRecruitInfo } from 'views/IntroducePage/apis';

import type { RecruitInfoResponse } from 'views/IntroducePage/types';

const useRecruitInfo = () => {
  return useQuery<RecruitInfoResponse>({
    queryKey: recruitInfoQueryKey,
    queryFn: getRecruitInfo,
  });
};

export default useRecruitInfo;
