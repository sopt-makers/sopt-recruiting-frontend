import tokenInstance from '@apis/tokenInstance';

export const postSatisfaction = (satisfaction: number) => {
  return tokenInstance.post('/recruiting-applicant/satisfaction', {
    satisfaction,
  });
};
