import { setUserId } from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';

import { VALIDATION_CHECK } from '@constants/validationCheck';

import { sendSignIn } from '../apis';

import type { SignInRequest, SignInResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

interface MutateSignInProps {
  finalPassConfirmEnd?: string;
  onSetError: (name: string, type: string, message: string) => void;
}

const useMutateSignIn = ({ finalPassConfirmEnd, onSetError }: MutateSignInProps) => {
  const { mutate: signInMutate, isPending: signInIsPending } = useMutation<
    AxiosResponse<SignInResponse, SignInRequest>,
    AxiosError<ErrorResponse, SignInRequest>,
    SignInRequest
  >({
    mutationFn: (userInfo: SignInRequest) => sendSignIn(userInfo),
    onSuccess: ({ data: { email, token } }) => {
      setUserId(email);
      localStorage.setItem('soptApplyAccessToken', token);
      localStorage.setItem('soptApplyAccessTokenExpiredTime', finalPassConfirmEnd || '');
      window.location.reload();
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
