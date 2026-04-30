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
    [breakpoints.tabletAndMobile]: { gap: '24px' },
  },
});

export const descriptionBox = style({
  width: '100%',
  maxWidth: '1200px',
  // TODO: colors에 gray20이 없는데,,
  backgroundColor: theme.color.subBackground,
  borderRadius: '24px',
  padding: '40px 80px',
  '@media': {
    [breakpoints.tablet]: { padding: '40px 80px', borderRadius: '20px' },
    [breakpoints.mobile]: { padding: '32px 40px', borderRadius: '16px' },
  },
});

export const descriptionText = style({
  color: colors.gray800,
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
  ...theme.font.TITLE_3_24_SB,
  '@media': {
    [breakpoints.tablet]: { ...theme.font.TITLE_6_16_SB },
    [breakpoints.mobile]: { ...theme.font.TITLE_7_14_SB },
  },
});
