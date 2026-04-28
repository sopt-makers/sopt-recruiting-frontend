import { colors } from '@sopt-makers/colors';
import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '0 40px 80px 40px',
  backgroundColor: colors.gray10,
  scrollBehavior: 'smooth',

  '@media': {
    [breakpoints.mobile]: { padding: '0 20px 40px 20px' },
  },
});

export const divider = style({
  width: '100%',
  height: '8px',
  // TODO: colors.gray20 적용 필요
  backgroundColor: '#F6F6F6',
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
