import { useMutation } from '@tanstack/react-query';

import { sendData } from '../apis';

import type { ApplyError, ApplyRequest, ApplyResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateSubmit = () => {
  const { mutate: submitMutate, isPending: submitIsPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ApplyError, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: (formData) => sendData('/recruiting-answer', formData),
  });

  return { submitMutate, submitIsPending };
};

export default useMutateSubmit;
