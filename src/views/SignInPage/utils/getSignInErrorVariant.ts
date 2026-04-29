import type { CustomError } from '@apis/fetcher';

import { SIGN_IN_ERROR_TYPE } from '../constants/signInError';
import type { SignInErrorData, SignInErrorVariant } from '../types';

const SIGN_IN_FAIL_WARNING_THRESHOLD = 5;

export const getSignInErrorVariant = (signInError: CustomError<SignInErrorData> | null): SignInErrorVariant => {
  if (!signInError) return null;
  if (signInError.status === 403) return SIGN_IN_ERROR_TYPE.WRONG_PASSWORD;
  if (signInError.status !== 401) return null;

  const { errorType, loginFailCount = 0 } = signInError.data ?? {};
  if (errorType === SIGN_IN_ERROR_TYPE.ACCOUNT_LOCKED) return null;
  if (errorType === SIGN_IN_ERROR_TYPE.ACCOUNT_NOT_FOUND) return SIGN_IN_ERROR_TYPE.ACCOUNT_NOT_FOUND;
  if (loginFailCount >= SIGN_IN_FAIL_WARNING_THRESHOLD) return SIGN_IN_ERROR_TYPE.LOCK_WARNING;

  return SIGN_IN_ERROR_TYPE.WRONG_PASSWORD;
};
