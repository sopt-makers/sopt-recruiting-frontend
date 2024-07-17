import tokenInstance from '@apis/tokenInstance';

import { ApplyRequest } from './types';

export const getQuestions = async ({ season, group }: { season?: number; group?: string }) => {
  const res = await tokenInstance.get('/recruiting-question/list', {
    params: {
      season,
      group,
    },
  });

  return res;
};

export const sendData = async (api: string, formValues: ApplyRequest) => {
  const res = await tokenInstance.post(api, formValues, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res;
};
