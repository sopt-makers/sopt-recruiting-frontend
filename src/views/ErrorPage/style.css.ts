import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: 700,

  '@supports': {
    'height: (100dvh)': {
      height: '100dvh',
    },
  },
});

export const container = styleVariants({
  withHeader: [
    containerBase,
    {
      height: calc.subtract('100vh', '80px'),

      '@supports': {
        'height: (100dvh)': {
          height: calc.subtract('100dvh', '80px'),
        },
      },
    },
  ],
  withoutHeader: [
    containerBase,
    {
      // height: '100vh',
      height: calc.subtract('100vh', '80px'),

      '@supports': {
        'height: (100dvh)': {
          // height: '100dvh',
          height: calc.subtract('100dvh', '80px'),
        },
      },
    },
  ],
});

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const errorText = style({
  marginBottom: 28,
  color: theme.color.baseText,
  ...theme.font.TITLE_2_28_SB,
});

export const errorButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 231,
  height: 60,
  marginBottom: 135,
  borderRadius: 99,
  backgroundColor: theme.color.errorButtonBackground,
  ...theme.font.TITLE_3_24_SB,
});

export const instruction = style({
  marginBottom: 20,
  color: theme.color.lightestText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.BODY_1_18_M,
});

export const contactButton = style({
  display: 'block',
  fontSize: 24,
  fontWeight: '600',
  lineHeight: '150%' /* 36px */,
  letterSpacing: '-0.48px',
  textDecorationLine: 'underline',
  margin: '0 auto',
  color: theme.color.buttonText,
});
