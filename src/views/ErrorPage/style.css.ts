import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  minHeight: 700,

  '@supports': {
    'height: (100dvh)': {
      height: '100dvh',
    },
  },
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
