import tokenInstance from '@apis/tokenInstance';

import { ApplyRequest } from './types';

export const getQuestions = async ({ season = 0, group = 'OB' }: { season?: number; group?: string }) => {
  const res = await tokenInstance.get('/recruiting-question/list', {
    params: {
      season,
      group,
    },
  });

  return res;
};

export const getDraft = async () => {
  const res = await tokenInstance.get('/recruiting-answer/store');

  return res;
};

export const sendDraft = async (formValues: ApplyRequest) => {
  const res = await tokenInstance.post('/recruiting-answer/store', formValues, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res;
};
