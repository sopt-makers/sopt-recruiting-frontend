import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const heading = style({
  /* Heading/40_B */
  ...theme.font.HEADING_1_48_B,
  fontSize: 40,
  lineHeight: '60px',
  letterSpacing: -0.8,
  color: theme.color.baseText,
});
