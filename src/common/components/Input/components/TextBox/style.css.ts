import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  width: '100%',

  ...theme.font.BODY_1_18_M,
});

const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  width: 'fit-content',

  color: theme.color.baseText,

  cursor: 'pointer',
});

export const titleVar = style([
  title,
  {
    ...theme.font.TITLE_5_18_SB,
    '@media': {
      [breakpoints.mobile]: {
        ...theme.font.TITLE_6_16_SB,
      },
    },
  },
]);

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});
