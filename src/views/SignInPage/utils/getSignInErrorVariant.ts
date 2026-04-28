import type { CustomError } from '@apis/fetcher';

import type { SignInErrorData, SignInErrorVariant } from '../types';

const SIGN_IN_FAIL_WARNING_THRESHOLD = 5;

export const getSignInErrorVariant = (signInError: CustomError<SignInErrorData> | null): SignInErrorVariant => {
  if (!signInError) return null;
  if (signInError.status === 403) return 'WRONG_PASSWORD';
  if (signInError.status !== 401) return null;

  const { errorType, loginFailCount = 0 } = signInError.data ?? {};
  if (errorType === 'ACCOUNT_LOCKED') return null;
  if (errorType === 'ACCOUNT_NOT_FOUND') return 'ACCOUNT_NOT_FOUND';
  if (loginFailCount >= SIGN_IN_FAIL_WARNING_THRESHOLD) return 'LOCK_WARNING';

  return 'WRONG_PASSWORD';
};
