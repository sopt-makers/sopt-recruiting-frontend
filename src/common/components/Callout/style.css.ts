import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  flexDirection: 'column',

  wordBreak: 'keep-all',
  padding: '28px 28px',
  borderRadius: 15,
  backgroundColor: theme.color.subBackground,
  whiteSpace: 'pre-line',
  ...theme.font.HEADING_6_18_B,
  letterSpacing: -0.36,
});

export const container = styleVariants({
  sm: [containerBase, { width: 466 }],
  lg: [containerBase, { width: 720 }],
});

export const warningWrapper = style({
  display: 'flex',
  gap: 22,
  alignItems: 'center',
});

export const button = style({
  marginTop: 8,
  marginLeft: 'auto',
});
