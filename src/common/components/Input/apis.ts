import instance from '@apis/instance';

export const sendingVerificationCode = async (email: string) => {
  const res = await instance.post('/recruiting-auth/verify/send', {
    email,
    season: 1,
  });

  return res;
};
