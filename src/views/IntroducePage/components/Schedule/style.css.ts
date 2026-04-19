import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '24px',
    },
  },
});

export const container = style({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'column',
  gap: '28px',
  '@media': {
    [breakpoints.tablet]: {
      gap: '40px',
    },
    [breakpoints.mobile]: {
      gap: '8px',
    },
  },
});

export const gridWrapper = style({
  display: 'grid',
  justifyContent: 'center',
  borderRadius: '16px',
  backgroundColor: '#f6f6f6',
  gridTemplateColumns: '171px auto',
  rowGap: '20px',
  columnGap: '220px',
  padding: '56px 0px',
  '@media': {
    [breakpoints.tablet]: {
      gridTemplateColumns: '128px auto',
      columnGap: '100px',
    },
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px 22px',
      textAlign: 'center',
    },
  },
});

export const scheduleGroup = style({
  display: 'contents',
  '@media': {
    [breakpoints.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    },
  },
});

export const oddText = style({
  color: colors.gray950,
  ...theme.font.HEADING_4_24_B,
  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.HEADING_6_18_B,
    },
    [breakpoints.mobile]: {
      ...theme.font.LABEL_4_12_SB,
      color: colors.gray200,
    },
  },
});

export const evenText = style({
  color: colors.gray950,
  fontSize: '24px',
  fontWeight: '400',
  lineHeight: '36px',
  letterSpacing: '-0.48px',
  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.BODY_1_18_M,
    },
    [breakpoints.mobile]: {
      ...theme.font.HEADING_6_18_B,
    },
  },
});

export const highlight = style({
  color: theme.color.primary,
  textDecorationLine: 'underline',
  fontWeight: '400',
  letterSpacing: '-0.48px',
  fontSize: '24px',
  lineHeight: '36px',
  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.BODY_1_18_M,
    },
    [breakpoints.mobile]: {
      ...theme.font.HEADING_6_18_B,
    },
  },
});
