type menuItemsTypes = {
  text: string;
  path?: string;
  amplitudeId?: string;
  target?: '_blank';
};

export const MENU_ITEMS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: 'https://makers.sopt.org/recruit',
    amplitudeId: 'click-gnb-recruitment_notice',
    target: '_blank',
  },
  {
    text: '문의하기',
    path: 'http://pf.kakao.com/_sxaIWG',
    amplitudeId: 'click-gnb-ask',
    target: '_blank',
  },
];
