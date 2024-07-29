import tokenInstance from '@apis/tokenInstance';

export const getMyInfo = async () => {
  const res = await tokenInstance.get('/recruiting-auth/my');

  return res;
};
