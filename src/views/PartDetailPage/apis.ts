import { homepageFetcher } from '@apis/fetcher';
import { PartDetailResponse } from './types';

export const getPartDetail = async (part: string): Promise<PartDetailResponse> => {
  return homepageFetcher('/recruit/part', { method: 'GET', params: { part } });
};
