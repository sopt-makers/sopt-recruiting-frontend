import { useQuery } from '@tanstack/react-query';

import { getQuestions } from '../apis';

import type { Applicant, QuestionsRequest, QuestionsResponse } from '../types';
import type { ErrorResponse } from '@type/errorResponse';
import type { AxiosError, AxiosResponse } from 'axios';

const useGetQuestions = (applicantDraft: Applicant | undefined) => {
  const { data: questionsData, isLoading: questionsIsLoading } = useQuery<
    AxiosResponse<QuestionsResponse, QuestionsRequest>,
    AxiosError<ErrorResponse, QuestionsRequest>,
    AxiosResponse<QuestionsResponse, QuestionsRequest>,
    string[]
  >({
    queryKey: ['get-questions'],
    queryFn: () => getQuestions({ season: applicantDraft?.season, group: applicantDraft?.group }),
    enabled: !!applicantDraft?.season && !!applicantDraft.group,
  });

  return { questionsData, questionsIsLoading };
};

export default useGetQuestions;
