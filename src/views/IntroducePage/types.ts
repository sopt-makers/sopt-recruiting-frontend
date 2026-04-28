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

export type PartDataType = '전체' | '기획' | '디자인' | '안드로이드' | 'iOS' | '웹' | '서버';

export interface SoptPartIntroduction {
  part: string;
  description: string;
}

export interface CoreValue {
  value: string;
  description: string;
  image: string;
}

export interface RecruitQuestionItem {
  question: string;
  answer: string;
}

export interface RecruitQuestion {
  part: string;
  questions: RecruitQuestionItem[];
}

export interface RecruitInfoResponse {
  recruitHeaderImage: string;
  partIntroduction: SoptPartIntroduction[];
  coreValue: CoreValue[];
  recruitQuestion: RecruitQuestion[];
}
