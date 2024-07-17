import instance from '@apis/instance';

import { CheckUserRequest } from './types';

export const checkUser = async (userInfo: CheckUserRequest) => {
  const { email, name, season, group } = userInfo;
  const res = await instance.post('/recruiting-auth/check/user', {
    email,
    name,
    season,
    group,
  });

  return res;
};

export const sendVerificationCode = async (email: string, season: number, isSignup: boolean) => {
  const res = await instance.post('/recruiting-auth/verify/send', {
    email,
    season,
    group: 'OB',
    isSignup,
  });

  return res;
};

export const checkVerificationCode = async (email: string, code: string) => {
  const res = await instance.post('/recruiting-auth/verify/email', {
    email,
    code,
  });

  return res;
};
