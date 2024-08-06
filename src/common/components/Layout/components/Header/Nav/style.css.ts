import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

export const menuIcon = style({
  width: 24,
  height: 24,
  fill: theme.color.baseText,
});
