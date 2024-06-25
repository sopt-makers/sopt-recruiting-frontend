import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const title = style({
  ...theme.font.HEADING_3_28_B,
  color: theme.color.baseText,
  fontSize: 30,
  fontWeight: 600,
  lineHeight: '42px',
  letterSpacing: '-0.6px',
});
