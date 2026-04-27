import { orgInstance } from '@apis/tokenInstance';

export const getRecruitInfo = () => {
  return orgInstance.get('/recruit', {});
};
