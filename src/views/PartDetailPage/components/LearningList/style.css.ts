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
  gap: '10px',
  padding: '16px 40px',
  backgroundColor: theme.color.subBackground,

  borderRadius: '14px',
  '@media': {
    [breakpoints.tablet]: { padding: '16px 24px', gap: '10px', borderRadius: '12px' },
    [breakpoints.mobile]: { padding: '12px 16px', gap: '8px', borderRadius: '10px' },
  },
});

export const itemIndex = style({
  color: theme.color.primary,
  flexShrink: 0,
  width: '28px',
  textAlign: 'right',
  ...theme.font.LABEL_2_16_SB,
  '@media': {
    [breakpoints.tabletAndMobile]: { ...theme.font.LABEL_4_12_SB },
  },
});

export const itemText = style({
  color: colors.black,
  ...theme.font.TITLE_4_20_SB,
  '@media': {
    [breakpoints.tablet]: { ...theme.font.TITLE_6_16_SB },
    [breakpoints.mobile]: { ...theme.font.BODY_3_14_M },
  },
});
