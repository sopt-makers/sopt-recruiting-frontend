import instance from '@apis/instance';

export const getRecruitingInfo = async () => {
  const res = await instance('/recruiting-season/latest', { method: 'GET' });

  return res;
};
