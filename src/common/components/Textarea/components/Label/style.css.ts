import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const labelStyle = style({
  width: 720,
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  ...theme.font.TITLE_5_18_SB,
});

export const requireDot = style({
  position: 'absolute',
  bottom: 5,
  display: 'inline-block',
  borderRadius: '100%',
  width: 8,
  height: 8,
  backgroundColor: theme.color.primary,
  transform: 'translate(3px ,-3px)',
});
