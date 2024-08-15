import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: calc.subtract('100vh', '80px'),
  minHeight: 700,

  '@supports': {
    '(height: 100dvh)': {
      height: calc.subtract('100dvh', '80px'),
    },
  },
});

const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  borderRadius: '50%',
  background: theme.color.primaryLinear,
});

export const iconVar = styleVariants({
  DESK: [
    icon,
    {
      width: 66,
      height: 66,
    },
  ],
  TAB: [
    icon,
    {
      width: 66,
      height: 66,
    },
  ],
  MOB: [
    icon,
    {
      width: 46,
      height: 46,
    },
  ],
});

const mainText = style({
  color: theme.color.baseText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: 8,
});

export const mainTextVar = styleVariants({
  DESK: [
    mainText,
    {
      ...theme.font.HEADING_2_32_B,
    },
  ],
  TAB: [
    mainText,
    {
      ...theme.font.HEADING_3_28_B,
    },
  ],
  MOB: [
    mainText,
    {
      ...theme.font.HEADING_5_20_B,
    },
  ],
});

const subText = style({
  color: theme.color.baseText,
  textAlign: 'center',
});

export const subTextVar = styleVariants({
  DESK: [
    subText,
    {
      marginBottom: 30,
      ...theme.font.BODY_1_18_M,
    },
  ],
  TAB: [
    subText,
    {
      marginBottom: 30,
      ...theme.font.BODY_2_16_M,
    },
  ],
  MOB: [
    subText,
    {
      marginBottom: 20,
      ...theme.font.BODY_3_14_M,
    },
  ],
});

const surveyBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50,
  color: theme.color.lightestText,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 15,
});

export const surveyBoxVar = styleVariants({
  DESK: [
    surveyBox,
    {
      gap: 12,
      width: 466,
      padding: '22px 0px',
      ...theme.font.BODY_2_16_M,
    },
  ],
  TAB: [
    surveyBox,
    {
      gap: 12,
      width: 387,
      padding: '22px 0px',
      ...theme.font.BODY_3_14_M,
    },
  ],
  MOB: [
    surveyBox,
    {
      gap: 14,
      width: 312,
      padding: '22px 0px',
      ...theme.font.BODY_4_13_M,
    },
  ],
});

export const bottomContainer = styleVariants({
  DESK: {
    position: 'relative',
    width: 348,
    height: 36,
  },
  TAB: {
    position: 'relative',
    width: 326,
    height: 34,
  },
  MOB: {
    position: 'relative',
    width: 180,
    height: 78,
  },
});

export const pointContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: 4,
  transition: 'all 0.3s ease',
});

export const pointContainerVar = styleVariants({
  in: [
    pointContainer,
    {
      opacity: 1,
    },
  ],
  out: [
    pointContainer,
    {
      opacity: 0,
    },
  ],
});

const pointBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  transition: 'color 0.3s ease, background-color 0.3s ease',
  cursor: 'pointer',
});

export const pointBoxSizeVar = styleVariants({
  DESK: {
    width: 28,
    height: 36,
  },
  TAB: {
    width: 26,
    height: 34,
  },
  MOB: {
    width: 26,
    height: 34,
  },
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
  changed: [
    pointBox,
    {
      cursor: 'default',
    },
  ],
});

export const thanksText = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  paddingTop: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...theme.font.TITLE_6_16_SB,
  color: theme.color.lighterText,
  transition: 'all 0.3s ease',
});

export const thanksTextVar = styleVariants({
  in: [
    thanksText,
    {
      opacity: 1,
    },
  ],
  out: [
    thanksText,
    {
      opacity: 0,
    },
  ],
});
