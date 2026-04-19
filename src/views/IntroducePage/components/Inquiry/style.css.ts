import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '24px',
    },
  },
});

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  '@media': {
    [breakpoints.mobile]: {
      gap: '2px',
    },
  },
});

export const description = style({
  color: colors.gray600,
  ...theme.font.TITLE_5_18_SB,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.BODY_3_14_M,
    },
  },
});

export const gridWrapper = style({
  display: 'grid',
  maxWidth: '1200px',
  justifyContent: 'space-between',
  gridTemplateColumns: 'auto auto',
  rowGap: '65px',
  width: '100%',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: 'auto',
      gridTemplateColumns: '1fr',
      rowGap: '24px',
    },
  },
});

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  maxWidth: '398px',
  gap: '40px',
  '@media': {
    [breakpoints.tablet]: {
      gap: '24px',
    },
    [breakpoints.mobile]: {
      gap: '16px',
    },
  },
});

export const image = style({
  objectFit: 'cover',
  width: '78px',
  height: '78px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: '32px',
      height: '32px',
    },
  },
});

export const contactContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '0px',
    },
  },
});

export const contactTitle = style({
  color: colors.gray600,
  fontWeight: '400',
  fontSize: '24px',
  lineHeight: '24px',
  letterSpacing: '-0.48px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.LABEL_4_12_SB,
    },
  },
});

export const contactSub = style({
  color: colors.gray950,
  fontWeight: '700',
  textDecorationLine: 'underline',
  textDecorationSkipInk: 'none',
  textUnderlinePosition: 'from-font',
  fontSize: '32px',
  lineHeight: '40px',
  letterSpacing: '-0.32px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: '-0.36px',
    },
  },
});
