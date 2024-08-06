import { style } from '@vanilla-extract/css';

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

export const menuIcon = style({
  width: 24,
  height: 24,
  cursor: 'pointer',
});
