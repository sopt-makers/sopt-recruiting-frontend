import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { theme } from 'styles/theme.css';
import { breakpoints } from 'styles/breakpoints';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: calc.subtract('100vh', '80px'),
  minHeight: 700,
  padding: '0 24',

  '@supports': {
    '(height: 100dvh)': {
      height: calc.subtract('100dvh', '80px'),
    },
  },
});

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 20,
  borderRadius: '50%',
  background: theme.color.primary,
  flexShrink: 0,
  width: 66,
  height: 66,
  '@media': {
    [breakpoints.mobile]: {
      width: 46,
      height: 46,
    },
  },
});

export const mainText = style({
  color: theme.color.baseText,
  textAlign: 'center',
  whiteSpace: 'pre-line',
  marginBottom: 24,
  ...theme.font.HEADING_2_32_B,
  '@media': {
    [breakpoints.mobile]: {
      marginBottom: 14,
      ...theme.font.HEADING_5_20_B,
    },
  },
});

export const buttonWrapper = style({
  marginTop: 50,
  '@media': {
    [breakpoints.mobile]: {
      marginTop: 30,
    },
  },
});

export const subText = style({
  color: theme.color.baseText,
  textAlign: 'center',
  marginBottom: 50,
  ...theme.font.BODY_1_18_M,
  '@media': {
    [breakpoints.mobile]: {
      marginBottom: 30,
      ...theme.font.BODY_3_14_M,
    },
  },
});

export const surveyBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 50,
  color: theme.color.lightestText,
  borderRadius: 15,
  gap: 12,
  width: 466,
  padding: '22px 0px',
  ...theme.font.BODY_2_16_M,
  '@media': {
    [breakpoints.tablet]: {
      width: 387,
      ...theme.font.BODY_3_14_M,
    },
    [breakpoints.mobile]: {
      gap: 14,
      width: 312,
      ...theme.font.BODY_4_13_M,
    },
  },
});

export const bottomContainer = style({
  position: 'relative',
  width: 348,
  height: 36,
  '@media': {
    [breakpoints.tablet]: {
      width: 326,
      height: 34,
    },
    [breakpoints.mobile]: {
      width: 180,
      height: 78,
    },
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
  in: [pointContainer, { opacity: 1 }],
  out: [pointContainer, { opacity: 0 }],
});

const pointBox = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
  transition: 'color 0.3s ease, background-color 0.3s ease',
  cursor: 'pointer',
  width: 28,
  height: 36,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: 26,
      height: 34,
    },
  },
});

export const pointBoxVar = styleVariants({
  default: [pointBox, { backgroundColor: theme.color.subBackground, color: theme.color.baseText }],
  selected: [pointBox, { backgroundColor: theme.color.primary, color: theme.color.white }],
  changed: [pointBox, { cursor: 'default' }],
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
  in: [thanksText, { opacity: 1 }],
  out: [thanksText, { opacity: 0 }],
});
