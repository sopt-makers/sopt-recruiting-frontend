import instance from '@apis/instance';

export const getRecruitingInfo = async () => {
  const res = await instance.get('/recruiting-season/latest');

  return res;
};
