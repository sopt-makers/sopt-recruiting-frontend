import instance from '@apis/instance';

import type { PasswordRequest } from './types';

export const sendPasswordChange = async (userInfo: PasswordRequest) => {
  const { email, season, group, password, passwordCheck } = userInfo;
  const res = await instance.post('/recruiting-auth/change/password', {
    email,
    season,
    group,
    password,
    passwordCheck,
  });

  return res;
};
