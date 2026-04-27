import { setUserId } from '@amplitude/analytics-browser';
import { useMutation } from '@tanstack/react-query';

import { sendSignIn } from '../apis';
import { LOGIN_FAIL_WARNING_THRESHOLD } from '../constants';

import type { SignInErrorData, SignInRequest, SignInResponse } from '../types';
import type { CustomError } from '@apis/fetcher';

interface MutateSignInProps {
  finalResultEnd?: string;
  onSetError: (name: string, type: string, message: string) => void;
  onLoginBlocked: () => void;
}

const useMutateSignIn = ({ finalResultEnd, onSetError, onLoginBlocked }: MutateSignInProps) => {
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
        // 메시지는 SignInForm 위 LoginNotMatchSection에서 노출하고, 여기서는 입력 필드의 빨간 테두리만 유지한다.
        onSetError('email', 'not-match', '');
        onSetError('password', 'not-match', '');
        return;
      }

      if (error.status === 401) {
        if (error.data?.locked) {
          onLoginBlocked();
          return;
        }

        // 5회 이상 실패는 form input error 대신 SignInForm에서 별도 경고 영역을 렌더한다.
        if ((error.data?.loginFailCount ?? 0) >= LOGIN_FAIL_WARNING_THRESHOLD) return;

        onSetError('email', 'not-match', '');
        onSetError('password', 'not-match', '');
      }
    },
  });

  return { signInMutate, signInIsPending, signInError };
};

export default useMutateSignIn;
