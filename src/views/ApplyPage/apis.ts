import tokenInstance from '@apis/tokenInstance';

import { ApplyRequest, QuestionsResponse } from './types';
import { AxiosResponse } from 'axios';

export const getQuestions = async ({
  season,
  group,
}: {
  season?: number;
  group?: string;
}): Promise<AxiosResponse<QuestionsResponse>> => {
  const res = await tokenInstance.get<QuestionsResponse>('/recruiting-question/list', {
    params: {
      season,
      group,
    },
  });
  return res;
};

export const sendData = async (api: string, formValues: ApplyRequest) => {
  const res = await tokenInstance.post(api, formValues);

  return res;
};

export const getDraft = async () => {
  const res = await tokenInstance.get('/recruiting-answer/store');

  return res;
};
