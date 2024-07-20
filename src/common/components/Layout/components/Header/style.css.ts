import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'sticky',
  top: 0,
  width: 1440,
  margin: '0 auto',
  padding: '22px 376px 22px 360px',

  backgroundColor: theme.color.background,

  zIndex: 99,
});

export const logo = style({ height: 30, cursor: 'pointer' });

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});