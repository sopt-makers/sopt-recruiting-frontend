import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 879,

  position: 'fixed',
  top: 0,
  width: '100%',
  padding: 22,

  zIndex: 99,

  '@media': {
    'screen and (max-width: 1440px)': {
      gap: 362,
    },
  },
});

export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});
