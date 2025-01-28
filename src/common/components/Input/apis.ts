import fetcher from '@apis/fetcher';

import { CheckUserRequest } from './types';

export const checkUser = async (userInfo: CheckUserRequest) => {
  const { email, name, season, group } = userInfo;
  const res = await fetcher('/recruiting-auth/check/user', {
    method: 'POST',
    body: {
      email,
      name,
      season,
      group,
    },
  });

  return res;
};

export const sendVerificationCode = async (email: string, season: number, group: string, isSignup: boolean) => {
  const res = await fetcher('/recruiting-auth/verify/send', {
    method: 'POST',
    body: {
      email,
      season,
      group,
      isSignup,
    },
  });

  return res;
};

export const checkVerificationCode = async (email: string, code: string) => {
  const res = await fetcher('/recruiting-auth/verify/email', {
    method: 'POST',
    body: {
      email,
      code,
    },
  });

  return res;
};
