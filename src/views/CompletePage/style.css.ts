import { style, styleVariants } from '@vanilla-extract/css';
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
  marginBottom: 20,
  width: 66,
  height: 66,
  borderRadius: '50%',
  background: theme.color.primaryLinear,
});

export const mainText = style({
  marginBottom: 8,
  color: theme.color.baseText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.HEADING_2_32_B,
});

export const subText = style({
  marginBottom: 30,
  color: theme.color.baseText,
  textAlign: 'center',
  ...theme.font.BODY_1_18_M,
});

export const surveyBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
  padding: '22px 75px',
  marginTop: 50,
  color: theme.color.lightestText,
  ...theme.font.BODY_2_16_M,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 15,
  transition: 'all 0.3s ease',
});

export const pointContainer = style({
  display: 'flex',
  gap: 4,
});

const pointBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 28,
  height: 36,
  borderRadius: 6,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
});

export const pointBoxVar = styleVariants({
  default: [
    pointBox,
    {
      backgroundColor: theme.color.subBackground,
      color: theme.color.baseText,
    },
  ],
  selected: [
    pointBox,
    {
      backgroundColor: theme.color.primary,
      color: theme.color.white,
    },
  ],
});

export const thanksText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 36,
  ...theme.font.TITLE_6_16_SB,
  color: theme.color.lighterText,
});
