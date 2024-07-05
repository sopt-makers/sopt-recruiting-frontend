import instance from '@apis/instance';

import { SignInRequest } from './types';

export const sendingSignIn = async (userInfo: SignInRequest) => {
  const { email, season, group, password } = userInfo;
  const res = await instance.post('/recruiting-auth/login', {
    email,
    season,
    group,
    password,
  });

  return res;
};
