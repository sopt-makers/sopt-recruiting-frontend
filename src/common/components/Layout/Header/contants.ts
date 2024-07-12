type menuItemsTypes = {
  text: string;
  path?: string;
  target?: '_blank';
};

export const MENU_ITEMS: menuItemsTypes[] = [
  {
    text: '모집공고',
    path: 'https://www.sopt.org/recruit',
    target: '_blank',
  },
  {
    text: '문의하기',
    path: 'https://pf.kakao.com/_JdTKd',
    target: '_blank',
  },
];
