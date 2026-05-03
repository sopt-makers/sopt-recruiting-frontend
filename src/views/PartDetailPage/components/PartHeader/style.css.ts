import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';
import { Z_INDEX } from '@constants/zIndex';

export const wrapper = style({
  position: 'sticky',
  height: '200px',
  top: 80,
  zIndex: Z_INDEX.partDetailHeader,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: colors.white,
  padding: '55px 40px',

  '@media': {
    [breakpoints.tablet]: {
      padding: '34px 40px',
      height: '200px',
    },
    [breakpoints.mobile]: {
      padding: '34px 20px',
      height: '174px',
    },
  },
});

export const wrapperScrolled = style([
  wrapper,
  {
    height: '120px',
    padding: '0 40px',
    '@media': {
      [breakpoints.tablet]: {
        height: '120px',
        padding: '0 40px',
      },
      [breakpoints.mobile]: {
        height: '94px',
        padding: '0 20px',
      },
    },
  },
]);

export const divider = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '1px',
  backgroundColor: '#EDEDED',
});

export const inner = style({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
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
