import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { sendData } from '../apis';
import { ApplyError, ApplyRequest, ApplyResponse } from '../types';

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
