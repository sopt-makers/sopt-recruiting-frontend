import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const labelStyle = style({
  position: 'relative',
  width: 720,
  marginBottom: 8,
  wordBreak: 'keep-all',
  ...theme.font.TITLE_5_18_SB,
});

export const requireDot = style({
  display: 'inline-block',
  borderRadius: '100%',
  width: 8,
  height: 8,
  backgroundColor: theme.color.primary,
  transform: 'translate(3px ,-3px)',
});
