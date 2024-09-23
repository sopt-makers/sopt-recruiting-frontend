import instance from '@apis/instance';

import type { SignInRequest } from './types';

export const sendSignIn = async (userInfo: SignInRequest) => {
  const { email, season, group, password } = userInfo;
  const res = await instance('/recruiting-auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      season,
      group,
      password,
    }),
  });

  return res;
};
