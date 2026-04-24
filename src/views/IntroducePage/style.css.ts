import { colors } from '@sopt-makers/colors';
import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '0 40px',
  gap: '232px',
  backgroundColor: colors.gray10,
  scrollBehavior: 'smooth',

  '@media': {
    [breakpoints.tabletAndMobile]: { gap: '100px' },
    [breakpoints.mobile]: { padding: '0 20px', gap: '100px' },
  },
});
globalStyle(`${wrapper} > *:nth-child(2)`, {
  marginTop: '80px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '40px' },
  },
});
