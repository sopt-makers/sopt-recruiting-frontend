import { style } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'fixed',
  top: 0,
  width: '100%',
  height: '80px',
  padding: '0 100px',
  boxSizing: 'border-box',
  margin: '0 auto',

  zIndex: Z_INDEX.gnbHeader,
  transition: 'background-color 0.3s ease',
  backgroundColor: theme.color.background,

  '@media': {
    [breakpoints.tablet]: {
      height: '48px',
      padding: '0 40px',
    },
    [breakpoints.mobile]: {
      height: '48px',
      padding: '0 20px',
    },
  },
});

export const logo = style({
  height: 30,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      height: 24,
    },
  },
});
