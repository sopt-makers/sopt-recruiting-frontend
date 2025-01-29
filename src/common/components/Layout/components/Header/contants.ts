type menuItemsTypes = {
  text: string;
  path?: string;
  amplitudeId?: string;
  target?: '_blank';
};

export const MENU_ITEMS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: 'https://www.sopt.org/recruit',
    amplitudeId: 'click-gnb-recruitment_notice',
    target: '_blank',
  },
  {
    text: '문의하기',
    path: 'https://pf.kakao.com/_JdTKd',
    amplitudeId: 'click-gnb-ask',
    target: '_blank',
  },
];

export const MENU_ITEMS_MAKERS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: 'https://sopt-makers.notion.site/36-2ff73e675e064d8fa762d409134eeb32',
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
