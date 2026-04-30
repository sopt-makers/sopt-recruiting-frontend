import { homepageFetcher } from '@apis/fetcher';
import { PartDetailResponse, ReviewsResponse, PartId } from './types';

export const getPartDetail = async (part: string): Promise<PartDetailResponse> => {
  return homepageFetcher('/recruit/part', { method: 'GET', params: { part } });
};

const PART_REVIEW_MAP: Record<PartId, string> = {
  Plan: 'PLAN',
  Design: 'DESIGN',
  Android: 'ANDROID',
  iOS: 'IOS',
  Web: 'WEB',
  Server: 'SERVER',
};

export const getReviews = async (partId: PartId): Promise<ReviewsResponse> => {
  return homepageFetcher('/reviews', {
    method: 'GET',
    params: { part: PART_REVIEW_MAP[partId], limit: '2', pageNo: '1' },
  });
};
