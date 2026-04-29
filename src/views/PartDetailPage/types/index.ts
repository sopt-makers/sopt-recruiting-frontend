export type PartId = 'Plan' | 'Design' | 'Android' | 'iOS' | 'Web' | 'Server';

export type PartDetailResponse = {
  introduction: string;
  preferences: string[];
  partCurriculum: string[];
};

export type ReviewApiItem = {
  id: number;
  title: string;
  author: string;
  authorProfileImageUrl: string;
  generation: number;
  description: string;
  partType: string;
  category: string;
  subject: string[];
  thumbnailUrl: string;
  platform: string;
  url: string;
};

export type ReviewsResponse = {
  limit: number;
  totalCount: number;
  totalPage: number;
  currentPage: number;
  data: ReviewApiItem[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
};
