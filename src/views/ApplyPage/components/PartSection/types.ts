import { ReactNode } from 'react';

export type PartQuestionType = {
  question: string;
  maxCount: number;
  required: boolean;
  extraInput?: ReactNode;
};
