import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendSignIn } from '../apis';

import type { SignInError, SignInRequest, SignInResponse } from '../types';
import type { AxiosError, AxiosResponse } from 'axios';

const useMutateSignIn = ({ onSetError }: { onSetError: (name: string, type: string, message: string) => void }) => {
  const navigate = useNavigate();

  const { mutate: signInMutate, isPending: signInIsPending } = useMutation<
    AxiosResponse<SignInResponse, SignInRequest>,
    AxiosError<SignInError, SignInRequest>,
    SignInRequest
  >({
    mutationFn: (userInfo: SignInRequest) => sendSignIn(userInfo),
    onSuccess: ({ data: { token } }) => {
      localStorage.setItem('soptApplyAccessToken', token);
      navigate(0);
    },
    onError(error) {
      if (error.response?.status === 403) {
        onSetError('email', 'not-match', VALIDATION_CHECK.email.notMatchErrorText);
        onSetError('password', 'not-match', VALIDATION_CHECK.password.notMatchErrorText);
      }
    },
  });

  return { signInMutate, signInIsPending };
};

export default useMutateSignIn;
