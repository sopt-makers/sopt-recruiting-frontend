import { SOPT_PART } from 'views/IntroducePage/constants/constant';

export type FAQItemType = {
  question: string;
  answer: string;
};

export type SoptPart = (typeof SOPT_PART)[number]['id'];
export type PartDataType = SoptPart | 'ALL';

export type FAQTabType = {
  value: PartDataType;
  label: string;
};
