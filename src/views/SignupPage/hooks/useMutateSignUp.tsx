import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { sendSignUp } from '../apis';

import type { SignUpRequest, SignUpResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateSignUpProps {
  onCheckExistence: () => void;
}

const useMutateSignUp = ({ onCheckExistence }: MutateSignUpProps) => {
  const navigate = useNavigate();

  const { mutate: signUpMutate, isPending: signUpIsPending } = useMutation<
    AxiosResponse<SignUpResponse, SignUpRequest>,
    AxiosError<ErrorResponse, SignUpRequest>,
    SignUpRequest
  >({
    mutationFn: (userInfo: SignUpRequest) => sendSignUp(userInfo),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        onCheckExistence();
      }
    },
  });

  return { signUpMutate, signUpIsPending };
};

export default useMutateSignUp;
