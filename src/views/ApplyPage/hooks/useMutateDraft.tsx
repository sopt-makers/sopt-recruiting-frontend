import { useMutation } from '@tanstack/react-query';

import { sendData } from '../apis';

import type { ApplyError, ApplyRequest, ApplyResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateDraft = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate: draftMutate, isPending: draftIsPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ApplyError, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: (formData) => sendData('/recruiting-answer/store', formData),
    onSuccess,
  });

  return { draftMutate, draftIsPending };
};

export default useMutateDraft;
