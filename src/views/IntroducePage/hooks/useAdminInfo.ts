import { adminInfoQueryKey } from '@constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

import { getAdminInfo } from 'views/IntroducePage/apis';

import type { AdminInfoResponse } from 'views/IntroducePage/types';

// TODO: /admin 임시 연동용. activitySchedule이 /recruit으로 옮겨오면 useRecruitInfo로 통합
const useAdminInfo = () => {
  return useQuery<AdminInfoResponse>({
    queryKey: adminInfoQueryKey,
    queryFn: getAdminInfo,
  });
};

export default useAdminInfo;
