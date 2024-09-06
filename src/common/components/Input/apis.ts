import instance from '@apis/instance';

import { CheckUserRequest } from './types';

export const checkUser = async (userInfo: CheckUserRequest) => {
  const { email, name, season, group } = userInfo;
  const res = await instance('/recruiting-auth/check/user', {
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      season,
      group,
    }),
  });

  return res;
};

export const sendVerificationCode = async (email: string, season: number, group: string, isSignup: boolean) => {
  const res = await instance('/recruiting-auth/verify/send', {
    method: 'POST',
    body: JSON.stringify({
      email,
      season,
      group,
      isSignup,
    }),
  });

  return res;
};

export const checkVerificationCode = async (email: string, code: string) => {
  const res = await instance('/recruiting-auth/verify/email', {
    method: 'POST',
    body: JSON.stringify({
      email,
      code,
    }),
  });

  return res;
};
