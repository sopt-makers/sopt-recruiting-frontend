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
  link: { type: 'open' | 'change-window'; href: string };
};
