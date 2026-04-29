export type PartId = 'Plan' | 'Design' | 'Android' | 'iOS' | 'Web' | 'Server';

export type ReviewItem = {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
  generation: number;
  partType: string;
};

export type PartDetailData = {
  id: PartId;
  name: string;
  partName: string;
  introduction: string;
  preferences: string[];
  partCurriculum: string[];
  reviews: ReviewItem[];
};

export type PartDetailResponse = {
  introduction: string;
  preferences: string[];
  partCurriculum: string[];
};
