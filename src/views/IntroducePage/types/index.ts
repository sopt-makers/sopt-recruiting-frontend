import { SOPT_PART } from 'views/IntroducePage/constants/constant';

export enum ContactType {
  EMAIL = 'email',
  KAKAO = 'kakao',
  INSTAGRAM = 'instagram',
  FACEBOOK = 'facebook',
}

export const contactInDisplayOrder: ContactType[] = [
  ContactType.EMAIL,
  ContactType.KAKAO,
  ContactType.INSTAGRAM,
  ContactType.FACEBOOK,
];

export type ContactItem = {
  label: string;
  desc: string;
  thumbnail: { src: string };
  link: { target: '_blank' | '_self'; href: string };
};

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
