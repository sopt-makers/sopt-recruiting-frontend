import { MAKERS_RECRUITMENT_NOTICE_URL } from '@constants/links';

type menuItemsTypes = {
  text: string;
  path?: string;
  amplitudeId?: string;
  target?: '_blank' | '_self';
};

export const AUTH_PATH = '/auth';

export const MENU_ITEMS_SOPT: menuItemsTypes[] = [
  {
    text: '문의하기',
    path: 'mailto:manager@sopt.org',
    amplitudeId: 'click-gnb-ask',
    target: '_blank',
  },
  {
    text: '로그인',
    path: AUTH_PATH,
    amplitudeId: 'click-gnb-signin',
  },
];

export const SIGNED_IN_MENU_ITEMS_SOPT: menuItemsTypes[] = [
  {
    text: '문의하기',
    path: 'mailto:manager@sopt.org',
    amplitudeId: 'click-gnb-ask',
    target: '_blank',
  },
  {
    text: '마이페이지',
    path: '/my',
    target: '_self',
  },
];

export const SIGNED_IN_MENU_ITEMS_MAKERS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: MAKERS_RECRUITMENT_NOTICE_URL,
    amplitudeId: 'click-gnb-recruitment_notice_makers',
    target: '_blank',
  },
  {
    text: '문의하기',
    path: 'https://pf.kakao.com/_sxaIWG',
    amplitudeId: 'click-gnb-ask_makers',
    target: '_blank',
  },
  {
    text: '마이페이지',
    path: '/my',
    target: '_self',
  },
];

export const MENU_ITEMS_MAKERS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: MAKERS_RECRUITMENT_NOTICE_URL,
    amplitudeId: 'click-gnb-recruitment_notice_makers',
    target: '_blank',
  },
  {
    text: '문의하기',
    path: 'https://pf.kakao.com/_sxaIWG',
    amplitudeId: 'click-gnb-ask_makers',
    target: '_blank',
  },
];
