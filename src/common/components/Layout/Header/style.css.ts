import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'sticky',
  top: 0,
  width: '100%',
  padding: '22px 376px 22px 360px',

  zIndex: 99,
});

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});
