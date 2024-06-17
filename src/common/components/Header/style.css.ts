import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 879,

  padding: 22,

  '@media': {
    'screen and (max-width: 1440px)': {
      gap: 362,
    },
  },
});

export const MenuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});
