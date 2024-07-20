import * as amplitude from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendSignIn } from '../apis';

import type { SignInRequest, SignInResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateSignInProps {
  email: string;
  onSetError: (name: string, type: string, message: string) => void;
}

const useMutateSignIn = ({ email, onSetError }: MutateSignInProps) => {
  const navigate = useNavigate();

  const { mutate: signInMutate, isPending: signInIsPending } = useMutation<
    AxiosResponse<SignInResponse, SignInRequest>,
    AxiosError<ErrorResponse, SignInRequest>,
    SignInRequest
  >({
    mutationFn: (userInfo: SignInRequest) => sendSignIn(userInfo),
    onSuccess: ({ data: { token } }) => {
      amplitude.setUserId(email);
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
