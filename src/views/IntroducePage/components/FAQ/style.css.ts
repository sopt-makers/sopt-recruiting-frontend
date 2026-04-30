import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
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
      gap: '16px',
    },
  },
});

export const listWrapper = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '16px',
  listStyle: 'none',
  paddingTop: '32px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '8px',
      paddingTop: 0,
    },
  },
});

export const itemVar = recipe({
  base: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
    flexDirection: 'column',
    borderRadius: '30px',
    padding: '40px 50px',
    cursor: 'pointer',
    transition: '0.2s',
    '@media': {
      [breakpoints.tabletAndMobile]: {
        padding: '20px',
      },
    },
  },
  variants: {
    state: {
      opened: { backgroundColor: '#f6f6f6' },
      closed: { backgroundColor: 'transparent' },
    },
  },
});

export const questionWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '14px',
});

export const questionText = style({
  fontFamily: 'SUIT',
  color: colors.gray950,
  fontSize: '24px',
  lineHeight: '36px',
  fontWeight: 600,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.BODY_3_14_M,
    },
  },

  selectors: {
    '&::before': {
      content: '"Q. "',
      color: theme.color.primary,
      fontFamily: 'SUIT',
      fontWeight: 800,
      fontSize: '27px',
      lineHeight: '46px',
      '@media': {
        [breakpoints.tabletAndMobile]: {
          fontWeight: 400,
          fontSize: theme.font.BODY_3_14_M.fontSize,
          lineHeight: theme.font.BODY_3_14_M.lineHeight,
        },
      },
    },
  },
});

export const answerLabel = style({
  color: theme.color.primary,
  fontFamily: 'SUIT',
  fontWeight: 800,
  flexShrink: 0,
  fontSize: '27px',
  lineHeight: '44px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.BODY_3_14_M,
    },
  },
});

export const answerText = style({
  fontFamily: 'SUIT',
  fontWeight: 400,
  wordBreak: 'keep-all',
  color: colors.gray600,
  whiteSpace: 'pre-line',
  fontSize: '24px',
  lineHeight: '44px',
  '@media': {
    [breakpoints.tablet]: {
      ...theme.font.BODY_2_16_R,
    },
    [breakpoints.mobile]: {
      ...theme.font.BODY_3_14_M,
    },
  },
});

export const iconWrapperVar = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    flexShrink: 0,
    transition: 'transform 0.2s',
    '@media': {
      [breakpoints.tabletAndMobile]: {
        width: '24px',
        height: '24px',
      },
    },
  },
  variants: {
    state: {
      opened: { transform: 'rotate(180deg)' },
      closed: { transform: 'rotate(0deg)' },
    },
  },
});

export const answerWrapper = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'flex-start',
  marginTop: '16px',
});
