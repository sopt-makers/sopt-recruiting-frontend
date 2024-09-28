import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: calc.subtract('100vh', '80px'),
  minHeight: 713,
  // marginTop: calc.subtract('50vh', '80px'),
  // transform: 'translateY(-50%)',
});

export const headingVar = styleVariants({
  DESK: [
    {
      marginBottom: 38,
      ...theme.font.HEADING_3_28_B,
    },
  ],
  TAB: [
    {
      marginBottom: 32,
      ...theme.font.HEADING_3_28_B,
    },
  ],
  MOB: [
    {
      marginBottom: 26,
      ...theme.font.HEADING_4_24_B,
    },
  ],
});

export const infoTitle = style({
  ...theme.font.HEADING_7_16_B,
});

export const infoText = style({
  ...theme.font.BODY_2_16_M,
});

const updateInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 90,
});

export const updateInfoWrapperVar = styleVariants({
  DESK: [
    updateInfoWrapper,
    {
      gap: 16,
      marginTop: 60,
    },
  ],
  TAB: [
    updateInfoWrapper,
    {
      gap: 16,
      marginTop: 50,
    },
  ],
  MOB: [
    updateInfoWrapper,
    {
      gap: 14,
      marginTop: 50,
    },
  ],
});

export const updateInfoTitle = style({
  color: theme.color.lighterText,
  ...theme.font.TITLE_6_16_SB,
});

export const browsersWrapper = style({
  display: 'flex',
  gap: 9,
  alignItems: 'center',
});

const browserButton = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 15,
  color: theme.color.lighterText,
});

export const browserButtonVar = styleVariants({
  DESK: [
    browserButton,
    {
      gap: 9,
      width: 90,
      height: 99,
      ...theme.font.BODY_3_14_M,
    },
  ],
  TAB: [
    browserButton,
    {
      gap: 9,
      width: 90,
      height: 99,
      ...theme.font.BODY_3_14_M,
    },
  ],
  MOB: [
    browserButton,
    {
      gap: 6,
      width: 72,
      height: 80,
      ...theme.font.BODY_4_13_M,
    },
  ],
});

export const browserIconVar = styleVariants({
  DESK: [
    {
      width: 48,
      height: 48,
    },
  ],
  TAB: [
    {
      width: 40,
      height: 40,
    },
  ],
  MOB: [
    {
      width: 32,
      height: 32,
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
