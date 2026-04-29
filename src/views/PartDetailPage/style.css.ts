import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 40px 100px 40px',
  scrollBehavior: 'smooth',
  '@media': {
    [breakpoints.mobile]: { padding: '0 20px 100px 20px' },
  },
});

// 하위 section영역들 간격 조정
globalStyle(`${wrapper} > * + *`, {
  marginTop: '232px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '100px' },
  },
});

// 첫 번째 section은 별도 간격 조정
globalStyle(`${wrapper} > *:nth-child(2)`, {
  marginTop: '60px',
  '@media': {
    [breakpoints.tablet]: { marginTop: '58px' },
    [breakpoints.mobile]: { marginTop: '118px' },
  },
});
