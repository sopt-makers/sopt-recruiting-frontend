import instance from '@apis/instance';

import { CheckEmailRequest } from './types';

export const checkingEmail = async (userInfo: CheckEmailRequest) => {
  const { email, name, season, group } = userInfo;
  const res = await instance.post('/recruiting-auth/check/user', {
    email,
    name,
    season,
    group,
  });

  return res;
};

export const sendingVerificationCode = async (email: string, season: number) => {
  const res = await instance.post('/recruiting-auth/verify/send', {
    email,
    season,
  });

  return res;
};

export const checkingVerificationCode = async (email: string, code: string) => {
  const res = await instance.post('/recruiting-auth/verify/email', {
    email,
    code,
  });

  return res;
};
