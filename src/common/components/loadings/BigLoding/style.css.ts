import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',

  '@supports': {
    'height: (100dvh)': {
      height: '100dvh',
    },
  },
});

export const loadingText = style({
  marginTop: '-10px',
  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,
});
