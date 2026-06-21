import { useMutation, useQueryClient } from '@tanstack/react-query';

import { sendData } from '../apis';

import type { ApplyRequest, ApplyResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateDraft = ({ onSuccess }: { onSuccess: () => void }) => {
  const queryClient = useQueryClient();

  const { mutate: draftMutate, isPending: draftIsPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ErrorResponse, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: (jsonData) => sendData('/recruiting-answer/store', jsonData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my'] });
      queryClient.invalidateQueries({ queryKey: ['get-draft'] });
      onSuccess();
    },
  });

  return { draftMutate, draftIsPending };
};

export default useMutateDraft;
