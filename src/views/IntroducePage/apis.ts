import { homepageFetcher } from '@apis/fetcher';

export const getRecruitInfo = () => {
  return homepageFetcher('/recruit', { method: 'GET' });
};

export const postNotificationEmail = (email: string, generation: number) => {
  return homepageFetcher('/notification/register', { method: 'POST', body: { email, generation } });
};
