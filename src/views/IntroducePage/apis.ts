import { homepageFetcher } from '@apis/fetcher';

export const getRecruitInfo = () => {
  return homepageFetcher('/recruit', { method: 'GET' });
};

// TODO: /admin은 어드민 대시보드용 풀 데이터 엔드포인트라 임시로 씀. activitySchedule을 /recruit으로 옮겨달라고 백엔드에 요청 예정
export const getAdminInfo = () => {
  return homepageFetcher('/admin', { method: 'GET' });
};

export const postNotificationEmail = (email: string, generation: number) => {
  return homepageFetcher('/notification/register', { method: 'POST', body: { email, generation } });
};
