import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: calc.subtract('100vh', '74px'),
  minHeight: 700,
  overflow: 'hidden',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: 720,
  gap: 50,
  color: theme.color.baseText,
});

export const content = style({
  whiteSpace: 'pre-line',
});

export const strongText = style({
  color: 'red',
});
