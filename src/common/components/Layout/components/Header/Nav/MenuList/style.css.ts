import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

const menuMobList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: theme.color.blackBackground,
});

export const menuMobListVar = styleVariants({
  TAB: [
    menuMobList,
    {
      padding: '92px 40px 40px 40px',
    },
  ],
  MOB: [
    menuMobList,
    {
      padding: '86px 20px 36px 20px',
    },
  ],
});
