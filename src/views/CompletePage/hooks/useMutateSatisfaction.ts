import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { ErrorResponse } from '@type/errorResponse';

import { postSatisfaction } from '../apis';
import { postSatisfactionRequest, postSatisfactionResponse } from '../types';

const useMutateSatisfaction = () => {
  const { mutate } = useMutation<
    AxiosResponse<postSatisfactionResponse, postSatisfactionRequest>,
    AxiosError<ErrorResponse, postSatisfactionRequest>,
    postSatisfactionRequest
  >({
    mutationFn: ({ satisfaction }) => postSatisfaction(satisfaction),
  });

  return { mutate };
};

export default useMutateSatisfaction;
