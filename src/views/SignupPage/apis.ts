import fetcher from '@apis/fetcher';

import type { SignUpRequest } from './types';

export const sendSignUp = async (userInfo: SignUpRequest) => {
  const { email, password, passwordCheck, name, phone, season, group } = userInfo;
  const res = await fetcher('/recruiting-auth/signup', {
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
