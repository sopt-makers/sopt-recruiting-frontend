import instance from '@apis/instance';

import { PasswordRequest } from './types';

export const sendingPasswordChange = async (userInfo: PasswordRequest) => {
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
