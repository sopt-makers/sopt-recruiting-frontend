import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../apis';
import { PartId } from '../types';

const useGetReviews = (partId: PartId) => {
  return useQuery({
    queryKey: ['reviews', partId],
    queryFn: () => getReviews(partId),
  });
};

export default useGetReviews;
