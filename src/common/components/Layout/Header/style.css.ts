import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'sticky',
  top: 0,
  width: '100%',
  padding: '22px 100px',

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
