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

export const listContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '750px',
  gap: '8px',
});

export const item = style({
  display: 'flex',
  alignItems: 'center',
  padding: '16px 40px',
  backgroundColor: theme.color.primaryAlpha10,
  borderRadius: '14px',
  '@media': {
    [breakpoints.tablet]: { padding: '16px 24px', borderRadius: '12px' },
    [breakpoints.mobile]: { padding: '12px 16px', borderRadius: '10px' },
  },
});

export const itemText = style({
  color: colors.gray950,
  ...theme.font.TITLE_4_20_SB,
  '@media': {
    [breakpoints.tablet]: { ...theme.font.TITLE_6_16_SB },
    [breakpoints.mobile]: { ...theme.font.BODY_3_14_M },
  },
});
