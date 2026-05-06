import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const gradientWrapper = style({
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wrapper = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  padding: '16px',
  backgroundColor: colors.gray50,
  justifyContent: 'space-between',
  borderRadius: '999px',

  '@media': {
    [breakpoints.tabletAndMobile]: {
      padding: '8px',
    },
  },
});

export const inputVar = style({
  width: '100%',
  padding: '12px 20px',
  borderRadius: '12px',
  ...theme.font.HEADING_5_20_B,

  '::placeholder': {
    color: colors.gray300,
    ...theme.font.HEADING_5_20_B,
  },

  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.HEADING_7_16_B,
      selectors: {
        '&::placeholder': {
          ...theme.font.HEADING_7_16_B,
        },
      },
    },
    [breakpoints.mobile]: {
      ...theme.font.BODY_3_14_R,
      fontSize: '16px',
      selectors: {
        '&::placeholder': {
          ...theme.font.BODY_3_14_R,
          fontSize: '16px',
        },
      },
    },
  },
});

export const buttonVar = style({
  width: '149px',
  padding: '16px 26px',
  backgroundColor: theme.color.primary,
  ...theme.font.LABEL_1_18_SB,
  ':hover': {
    backgroundColor: theme.color.primaryDark,
  },
  ':active': {
    backgroundColor: theme.color.primaryLight,
  },

  '@media': {
    [breakpoints.tablet]: {
      padding: '12px 20px',
      ...theme.font.LABEL_2_16_SB,
    },
    [breakpoints.mobile]: {
      padding: '9px 14px',
      ...theme.font.LABEL_3_14_SB,
    },
  },
});
