import { useMutation } from '@tanstack/react-query';

import { sendData } from '../apis';

import type { ApplyRequest, ApplyResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateDraft = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate: draftMutate, isPending: draftIsPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ErrorResponse, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: (jsonData) => sendData('/recruiting-answer/store', jsonData),
    onSuccess,
  });

  return { draftMutate, draftIsPending };
};

export default useMutateDraft;
