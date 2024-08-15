import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '20px 0 50px',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      gap: 16,
    },
  ],
  TAB: [
    container,
    {
      gap: 16,
    },
  ],
  MOB: [
    container,
    {
      gap: 14,
    },
  ],
});

export const info = style({
  color: theme.color.lighterText,
  whiteSpace: 'pre-line',
});

export const infoVar = styleVariants({
  DESK: [
    info,
    {
      ...theme.font.BODY_1_18_M,
      letterSpacing: '-0.27px',
    },
  ],
  TAB: [
    info,
    {
      ...theme.font.BODY_2_16_M,
      letterSpacing: '-0.24px',
    },
  ],
  MOB: [
    info,
    {
      ...theme.font.BODY_3_14_M,
      letterSpacing: '-0.21px',
    },
  ],
});
