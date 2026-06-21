import { style } from '@vanilla-extract/css';

import { breakpoints } from 'styles/breakpoints';
export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
  '@media': {
    [breakpoints.tablet]: {
      gap: 24,
    },
    [breakpoints.mobile]: {
      gap: 16,
    },
  },
});
