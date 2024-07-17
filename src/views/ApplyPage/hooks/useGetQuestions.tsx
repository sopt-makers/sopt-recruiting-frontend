import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { getQuestions } from '../apis';
import { Applicant, ApplyError, QuestionsRequest, QuestionsResponse } from '../types';

const useGetQuestions = (applicantDraft: Applicant | undefined) => {
  const { data: questionsData, isLoading: questionsIsLoading } = useQuery<
    AxiosResponse<QuestionsResponse, QuestionsRequest>,
    AxiosError<ApplyError, QuestionsRequest>,
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
