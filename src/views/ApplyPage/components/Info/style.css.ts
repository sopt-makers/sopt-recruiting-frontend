import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  margin: '20px 0 50px',
});

export const info = style({
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,
  whiteSpace: 'pre-line',
  letterSpacing: '-0.27px',
});
