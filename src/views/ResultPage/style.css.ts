import { keyframes, style } from '@vanilla-extract/css';
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

  '@supports': {
    '(height: 100dvh)': {
      height: calc.subtract('100dvh', '74px'),
    },
  },
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: 720,
  gap: 50,
  color: theme.color.baseText,
  ...theme.font.BODY_1_18_M,
});

export const content = style({
  whiteSpace: 'pre-line',
});

export const strongText = style({
  color: theme.color.primary,
});

const animatedGradient = keyframes({
  '0%': {
    width: '40%',
    boxShadow: `0px 100px 100px 70px ${theme.color.primary}`,
  },

  '100%': {
    width: '80%',
    boxShadow: `0px 100px 100px 100px ${theme.color.primary}`,
  },
});

export const bottomAnimation = style({
  position: 'absolute',
  bottom: '-100px',
  height: 100,
  borderRadius: '100%',
  animation: `${animatedGradient} ease-in-out 3s alternate infinite`,
});
