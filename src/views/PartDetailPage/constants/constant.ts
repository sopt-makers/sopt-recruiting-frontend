import { PartId } from 'views/PartDetailPage/types';

export const PART_DETAIL_TITLE = {
  INTRODUCTION: {
    label: 'Introduction',
    title: (partName: string) => `${partName} 파트를 소개합니다`,
  },
  GOOD_FOR_YOU: {
    label: 'Qualification',
    title: '이런 분이면 더 좋아요',
  },
  LEARNING: {
    label: 'Curriculum',
    title: (partName: string) => `${partName} 파트는 이런 걸 배워요`,
  },
  SCHEDULE: {
    label: 'Schedule',
    title: '전체 지원 일정을 확인하세요',
  },
  REVIEW: {
    label: 'Review',
    title: '솝트 후기에서 관련 정보를 찾아보세요',
  },
};

export const PART_NAME_MAP: Record<PartId, string> = {
  Plan: '기획',
  Design: '디자인',
  Android: '안드로이드',
  iOS: 'iOS',
  Web: '웹',
  Server: '서버',
};

export const getPartIdFromPartName = (partName: string) => {
  return (Object.entries(PART_NAME_MAP) as [PartId, string][]).find(([, name]) => name === partName)?.[0];
};
