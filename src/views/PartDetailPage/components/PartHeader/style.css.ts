import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '55px 0',

  '@media': {
    [breakpoints.tabletAndMobile]: {
      padding: '34px 0',
    },
  },
});

export const partText = style({
  ...theme.font.HEADING_2_32_B,
  color: colors.gray950,

  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.HEADING_3_28_B,
    },
    [breakpoints.mobile]: {
      ...theme.font.HEADING_6_18_B,
    },
  },
});

export const dateText = style({
  ...theme.font.TITLE_4_20_SB,
  color: colors.gray950,

  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.TITLE_7_14_SB,
    },
    [breakpoints.mobile]: {
      ...theme.font.LABEL_4_12_SB,
    },
  },
});

export const button = style({
  width: '300px',
  padding: '18px 0',
  backgroundColor: theme.color.primary,
  color: colors.white,
  ...theme.font.HEADING_4_24_B,

  ':disabled': {
    backgroundColor: colors.gray50,
    color: colors.gray400,
  },

  '@media': {
    [breakpoints.tablet]: {
      width: '242px',
      padding: '16px 0',
      ...theme.font.LABEL_1_18_SB,
    },
    [breakpoints.mobile]: {
      width: '100px',
      padding: '10px 0',
      ...theme.font.LABEL_2_16_SB,
    },
  },
});
