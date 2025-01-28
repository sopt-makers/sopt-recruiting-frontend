import fetcher from '@apis/fetcher';

import type { PasswordRequest } from './types';

export const sendPasswordChange = async (userInfo: PasswordRequest) => {
  const { email, season, group, password, passwordCheck } = userInfo;
  const res = await fetcher('/recruiting-auth/change/password', {
    method: 'POST',
    body: {
      email,
      season,
      group,
      password,
      passwordCheck,
    },
  });

  return res;
};
