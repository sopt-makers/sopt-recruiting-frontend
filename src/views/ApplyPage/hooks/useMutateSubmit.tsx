import { useMutation } from '@tanstack/react-query';

import { sendData } from '../apis';

import type { ApplyRequest, ApplyResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateSubmit = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate: submitMutate, isPending: submitIsPending } = useMutation<
    AxiosResponse<ApplyResponse, ApplyRequest>,
    AxiosError<ErrorResponse, ApplyRequest>,
    ApplyRequest
  >({
    mutationFn: (formData) => sendData('/recruiting-answer', formData),
    onSuccess,
  });

  return { submitMutate, submitIsPending };
};

export default useMutateSubmit;
