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
  color: theme.color.baseText,
});

export const errorTextVar = styleVariants({
  DESK: [
    errorText,
    {
      marginBottom: 28,
      ...theme.font.TITLE_2_28_SB,
    },
  ],
  TAB: [
    errorText,
    {
      marginBottom: 28,
      ...theme.font.TITLE_2_28_SB,
    },
  ],
  MOB: [
    errorText,
    {
      marginBottom: 24,
      ...theme.font.TITLE_3_24_SB,
    },
  ],
});

const errorButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 99,
  backgroundColor: theme.color.errorButtonBackground,
});

export const errorButtonVar = styleVariants({
  DESK: [
    errorButton,
    {
      width: 231,
      height: 60,
      marginBottom: 135,
      ...theme.font.TITLE_3_24_SB,
    },
  ],
  TAB: [
    errorButton,
    {
      width: 202,
      height: 54,
      marginBottom: 140,
      ...theme.font.TITLE_4_20_SB,
    },
  ],
  MOB: [
    errorButton,
    {
      width: 175,
      height: 44,
      marginBottom: 140,
      ...theme.font.TITLE_5_18_SB,
    },
  ],
});

const instruction = style({
  color: theme.color.lightestText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
});

export const instructionVar = styleVariants({
  DESK: [
    instruction,
    {
      marginBottom: 20,
      ...theme.font.BODY_1_18_M,
    },
  ],
  TAB: [
    instruction,
    {
      marginBottom: 24,
      ...theme.font.BODY_2_16_M,
    },
  ],
  MOB: [
    instruction,
    {
      marginBottom: 24,
      ...theme.font.BODY_3_14_M,
    },
  ],
});

const contactButton = style({
  display: 'block',
  textDecorationLine: 'underline',
  margin: '0 auto',
  color: theme.color.buttonText,
});

export const contactButtonVar = styleVariants({
  DESK: [
    contactButton,
    {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: '150%' /* 36px */,
      letterSpacing: '-0.48px',
    },
  ],
  TAB: [
    contactButton,
    {
      ...theme.font.HEADING_5_20_B,
    },
  ],
  MOB: [
    contactButton,
    {
      ...theme.font.TITLE_5_18_SB,
    },
  ],
});
