import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: calc.subtract('100vh', '74px'),

  '@supports': {
    'height: (100dvh)': {
      height: calc.subtract('100dvh', '74px'),
    },
  },
});

export const wrapper = style({
  marginTop: '-105px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const loadingText = style({
  marginTop: '-100px',
  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,
});
