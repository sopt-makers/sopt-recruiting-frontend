import tokenInstance from '@apis/tokenInstance';

export const getDraft = async () => {
  const res = await tokenInstance.get('/recruiting-answer/store');

  return res;
};
