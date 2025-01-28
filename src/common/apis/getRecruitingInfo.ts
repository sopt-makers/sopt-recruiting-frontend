import fetcher from '@apis/fetcher';

export const getRecruitingInfo = async () => {
  const res = await fetcher('/recruiting-season/latest', { method: 'GET' });

  return res;
};
