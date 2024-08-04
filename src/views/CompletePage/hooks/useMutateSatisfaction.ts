import { useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { ErrorResponse } from '@type/errorResponse';

import { postSatisfaction } from '../apis';
import { PostSatisfactionRequest, PostSatisfactionResponse } from '../types';

const useMutateSatisfaction = () => {
  const { mutate } = useMutation<
    AxiosResponse<PostSatisfactionResponse, PostSatisfactionRequest>,
    AxiosError<ErrorResponse, PostSatisfactionRequest>,
    PostSatisfactionRequest
  >({
    mutationFn: ({ satisfaction }) => postSatisfaction(satisfaction),
  });

  return { mutate };
};

export default useMutateSatisfaction;
