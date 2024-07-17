import { useQuery } from '@tanstack/react-query';

import { getDraft } from '../apis';

import type { ApplyError, ApplyResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetDraft = () => {
  const { data: draftData, isLoading: draftIsLoading } = useQuery<
    AxiosResponse<ApplyResponse, null>,
    AxiosError<ApplyError, null>,
    AxiosResponse<ApplyResponse, null>,
    string[]
  >({
    queryKey: ['get-draft'],
    queryFn: getDraft,
  });

  return { draftData, draftIsLoading };
};

export default useGetDraft;
