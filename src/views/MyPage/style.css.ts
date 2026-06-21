import { style } from '@vanilla-extract/css';

import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const containerVar = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 467,
  gap: 50,
  margin: '90px 0 70px',

  '@media': {
    [breakpoints.tablet]: {
      width: 367,
      margin: '90px 0 191px',
    },
    [breakpoints.mobile]: {
      width: 312,
      gap: 30,
      margin: '23px 0 74px',
    },
  },
});

export const infoContainerVar = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 455,
  border: `1px solid ${theme.color.border}`,
  borderRadius: 18,
  width: 467,
  padding: '38px 80px',

  '@media': {
    [breakpoints.tablet]: {
      width: 367,
      padding: '38px 50px',
    },
    [breakpoints.mobile]: {
      width: 312,
      padding: '38px 34px',
    },
  },
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const infoLabelVar = style({
  width: 63,
  color: theme.color.lighterText,
  ...theme.font.BODY_1_18_M,

  '@media': {
    [breakpoints.mobile]: {
      width: 56,
      ...theme.font.BODY_2_16_M,
    },
  },
});

export const infoValueVar = style({
  width: 132,
  color: theme.color.baseText,
  textAlign: 'center',
  ...theme.font.TITLE_5_18_SB,

  '@media': {
    [breakpoints.mobile]: {
      width: 111,
      ...theme.font.TITLE_6_16_SB,
    },
  },
});

export const buttonValue = style([
  itemWrapper,
  {
    marginTop: '-15px',
  },
]);

export const buttonWidthVar = style({
  paddingLeft: 0,
  paddingRight: 0,
  width: 132,
  letterSpacing: '-0.36px',

  '@media': {
    [breakpoints.mobile]: {
      width: 111,
      letterSpacing: '-0.24px',
    },
  },
});

export const emptyContainerVar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 77,
  gap: 24,
  minHeight: 400,
  borderRadius: 18,
  backgroundColor: theme.color.subBackground,
  width: 467,
  height: 466,

  '@media': {
    [breakpoints.tablet]: {
      width: 367,
    },
    [breakpoints.mobile]: {
      width: 312,
      height: 452,
    },
  },
});

export const emptyText = style({
  color: theme.color.baseText,
  ...theme.font.TITLE_5_18_SB,
});

export const logoutButtonVar = style({
  alignSelf: 'center',
  color: theme.color.buttonText,
  ...theme.font.TITLE_5_18_SB,

  '@media': {
    [breakpoints.mobile]: {
      ...theme.font.LABEL_3_14_SB,
    },
  },
});
