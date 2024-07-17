import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { sendData } from '../apis';
import { ApplyError, ApplyRequest, ApplyResponse } from '../types';

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
