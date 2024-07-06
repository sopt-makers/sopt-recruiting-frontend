import tokenInstance from '@apis/tokenInstance';

import { ApplyRequest } from './types';

export const sendDraft = async (formValues: ApplyRequest) => {
  const res = await tokenInstance.post('/recruiting-answer/store', formValues, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res;
};
