import { useQuery } from '@tanstack/react-query';

import { getDraft } from '../apis';

import type { ApplyResponse } from '../../ApplyPage/types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetDraft = () => {
  const { data: draftData, isLoading: draftIsLoading } = useQuery<
    AxiosResponse<ApplyResponse, null>,
    AxiosError<ErrorResponse, null>,
    AxiosResponse<ApplyResponse, null>,
    string[]
  >({
    queryKey: ['get-draft'],
    queryFn: getDraft,
  });

  return { draftData, draftIsLoading };
};

export default useGetDraft;
