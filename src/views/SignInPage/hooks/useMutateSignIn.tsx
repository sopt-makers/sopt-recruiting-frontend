import { setUserId } from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';

import { sendSignIn } from '../apis';
import { SIGN_IN_ERROR_TYPE } from '../constants/signInError';

import type { SignInErrorData, SignInRequest, SignInResponse } from '../types';
import type { CustomError } from '@apis/fetcher';

interface MutateSignInProps {
  finalResultEnd?: string;
  onSetError: (name: string, type: string, message: string) => void;
  onSignInBlocked: () => void;
}

const useMutateSignIn = ({ finalResultEnd, onSetError, onSignInBlocked }: MutateSignInProps) => {
  const {
    mutate: signInMutate,
    isPending: signInIsPending,
    error: signInError,
  } = useMutation<SignInResponse, CustomError<SignInErrorData>, SignInRequest>({
    mutationFn: (userInfo: SignInRequest) => sendSignIn(userInfo),
    onSuccess: ({ email, token }) => {
      setUserId(email);
      localStorage.setItem('soptApplyAccessToken', token);
      localStorage.setItem('soptApplyAccessTokenExpiredTime', finalResultEnd || '');
      window.location.reload();
    },
    onError(error) {
      if (error.status === 403) {
        onSetError('email', 'not-match', '');
        onSetError('password', 'not-match', '');
        return;
      }

      if (error.status === 401) {
        if (error.data?.errorType === SIGN_IN_ERROR_TYPE.ACCOUNT_LOCKED) {
          onSignInBlocked();
          return;
        }

        if (
          error.data?.errorType === SIGN_IN_ERROR_TYPE.WRONG_PASSWORD ||
          error.data?.errorType === SIGN_IN_ERROR_TYPE.ACCOUNT_NOT_FOUND
        ) {
          onSetError('email', 'not-match', '');
          onSetError('password', 'not-match', '');
        }
      }
    },
  });

  return { signInMutate, signInIsPending, signInError };
};

export default useMutateSignIn;
