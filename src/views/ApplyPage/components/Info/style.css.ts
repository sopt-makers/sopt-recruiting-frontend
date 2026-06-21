import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px 0 50px',
});

export const containerVar = style([
  container,
  {
    gap: '16px',
    '@media': {
      [breakpoints.mobile]: {
        gap: '14px',
      },
    },
  },
]);

export const info = style({
  color: theme.color.lighterText,
  whiteSpace: 'pre-line',
});

export const infoVar = style([
  info,
  {
    ...theme.font.BODY_1_18_M,
    letterSpacing: '-0.27px',
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.BODY_3_14_M,
        letterSpacing: '-0.21px',
      },
    },
  },
]);
