import { orgInstance } from '@apis/tokenInstance';

export const getRecruitInfo = () => {
  return orgInstance.get('/recruit', {});
};

export const postNotificationEmail = (email: string, generation: number) => {
  return orgInstance.post('/notification/register', { email, generation });
};
