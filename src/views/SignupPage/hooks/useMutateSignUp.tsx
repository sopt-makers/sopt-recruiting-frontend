import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendSignUp } from '../apis';

import type { SignUpError, SignUpRequest, SignUpResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateSignUp = ({ onSetError }: { onSetError: (name: string, type: string, message: string) => void }) => {
  const navigate = useNavigate();

  const { mutate: signUpMutate, isPending: signUpIsPending } = useMutation<
    AxiosResponse<SignUpResponse, SignUpRequest>,
    AxiosError<SignUpError, SignUpRequest>,
    SignUpRequest
  >({
    mutationFn: (userInfo: SignUpRequest) => sendSignUp(userInfo),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      if (error.response?.status === 400) {
        onSetError('email', 'already-existence', VALIDATION_CHECK.email.errorTextExistence);
      }
    },
  });

  return { signUpMutate, signUpIsPending };
};

export default useMutateSignUp;
