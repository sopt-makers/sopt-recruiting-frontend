import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 466,
  height: calc.subtract('100vh', '74px'),
  minHeight: 700,

  '@supports': {
    '(height: 100dvh)': {
      height: calc.subtract('100dvh', '74px'),
    },
  },
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '32px',
  width: 66,
  height: 66,
  borderRadius: '50%',
  background: theme.color.primaryLinear,
});

export const mainText = style({
  marginBottom: 24,
  color: theme.color.baseText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.HEADING_2_32_B,
});

export const subText = style({
  marginBottom: 50,
  color: theme.color.baseText,
  textAlign: 'center',
  ...theme.font.BODY_1_18_M,
});
