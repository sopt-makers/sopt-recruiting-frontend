import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
  minHeight: '400px',
  paddingBottom: '20vh',
  overflow: 'scroll',

  '@supports': {
    'height: (100dvh)': {
      height: '100dvh',
      paddingBottom: '20dvh',
    },
  },
});

export const article = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '34px',
  width: '100%',
});

export const errorText = style({
  fontSize: 28,
  fontWeight: '600',
  lineHeight: '150%',
  letterSpacing: '-0.96px',
});

export const instruction = style({
  marginBottom: 20,
  color: theme.color.lightestText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.BODY_1_18_M,
});

export const contactButton = style({
  position: 'absolute',
  bottom: '17dvh',
  fontSize: 24,
  fontWeight: '600',
  lineHeight: '150%' /* 36px */,
  letterSpacing: '-0.48px',
  textDecorationLine: 'underline',
  color: theme.color.buttonText,
  // cursor: 'pointer',
});
