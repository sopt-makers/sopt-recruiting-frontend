import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const heading = style({
  ...theme.font.HEADING_3_28_B,
  marginBottom: 32,
});

export const infoTitle = style({
  ...theme.font.HEADING_7_16_B,
});

export const infoText = style({
  ...theme.font.BODY_2_16_M,
});

export const updateInfoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  alignItems: 'center',
  marginTop: 50,
  marginBottom: 90,
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

export const browserButton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
  justifyContent: 'center',
  width: 90,
  height: 99,
  alignItems: 'center',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 15,
  color: theme.color.lighterText,
  ...theme.font.BODY_3_14_M,
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
