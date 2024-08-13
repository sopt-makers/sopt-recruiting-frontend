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
});

export const mainTextVar = styleVariants({
  DESK: [
    mainText,
    {
      marginBottom: 8,
      ...theme.font.HEADING_2_32_B,
    },
  ],
  TAB: [
    mainText,
    {
      marginBottom: 8,
      ...theme.font.HEADING_3_28_B,
    },
  ],
  MOB: [
    mainText,
    {
      marginBottom: 8,
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
      marginBottom: 30,
      ...theme.font.BODY_3_14_M,
    },
  ],
});

export const surveyBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 12,
  width: 466,
  padding: '22px 0px',
  marginTop: 35,
  color: theme.color.lightestText,
  ...theme.font.BODY_2_16_M,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 15,
});

export const pointContainer = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
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
