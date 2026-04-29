import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',

  '@media': {
    [breakpoints.tablet]: {
      gap: '40px',
    },
    [breakpoints.mobile]: {
      gap: '60px',
    },
  },
});

export const container = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 40px',
  borderRadius: '32px',
  backgroundColor: 'rgba(82, 146, 229, 0.10)',

  '@media': {
    [breakpoints.mobile]: {
      flexDirection: 'column',
      padding: '24px',
      gap: '16px',
      borderRadius: '24px',
    },
  },
});

export const textVar = style({
  ...theme.font.HEADING_2_32_B,

  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.HEADING_4_24_B,
    },
    [breakpoints.mobile]: {
      ...theme.font.HEADING_6_18_B,
    },
  },
});

export const buttonVar = style({
  width: '200px',
  padding: '18px 40px',
  backgroundColor: theme.color.primary,
  ...theme.font.HEADING_4_24_B,
  ':hover': {
    backgroundColor: theme.color.primaryDark,
  },
  ':active': {
    backgroundColor: theme.color.primaryLight,
  },

  '@media': {
    [breakpoints.tablet]: {
      width: '200px',
      padding: '16px 26px',
      ...theme.font.LABEL_1_18_SB,
    },
    [breakpoints.mobile]: {
      width: '100%',
      padding: '12px 20px',
      ...theme.font.LABEL_2_16_SB,
    },
  },
});
