import { useQuery } from '@tanstack/react-query';
import { getPartDetail } from '../apis';
import { PartDetailResponse } from '../types';

const useGetPartDetail = (partId: string) => {
  return useQuery<PartDetailResponse>({
    queryKey: ['part-detail', partId],
    queryFn: () => getPartDetail(partId),
    enabled: !!partId,
  });
};

export default useGetPartDetail;
