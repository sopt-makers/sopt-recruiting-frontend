import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  width: 1440,
  margin: '0 auto',
  padding: '22px 376px 22px 360px',

  backgroundColor: theme.color.white,

  zIndex: 99,
});

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});
