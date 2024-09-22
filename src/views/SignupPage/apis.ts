import instance from '@apis/instance';

import type { SignUpRequest } from './types';

export const sendSignUp = async (userInfo: SignUpRequest) => {
  const { email, password, passwordCheck, name, phone, season, group } = userInfo;
  const res = await instance('/recruiting-auth/signup', {
    method: 'POST',
    body: {
      email,
      password,
      passwordCheck,
      name,
      phone,
      season,
      group,
    },
  });

  return res;
};
