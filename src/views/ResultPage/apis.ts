import tokenInstance from '@apis/tokenInstance';

export const getScreeningResult = async () => {
  const res = await tokenInstance.get('/recruiting-applicant/result/application');

  return res;
};

export const getFinalResult = async () => {
  const res = await tokenInstance.get('/recruiting-applicant/result/final');

  return res;
};
