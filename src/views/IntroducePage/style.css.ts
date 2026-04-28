import { colors } from '@sopt-makers/colors';
import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '0 40px',
  backgroundColor: colors.gray10,
  scrollBehavior: 'smooth',

  '@media': {
    [breakpoints.mobile]: { padding: '0 20px' },
  },
});

globalStyle(`${wrapper} > * + *`, {
  marginTop: '232px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '100px' },
  },
});

globalStyle(`${wrapper} > *:nth-child(2)`, {
  marginTop: '80px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '40px' },
  },
});
