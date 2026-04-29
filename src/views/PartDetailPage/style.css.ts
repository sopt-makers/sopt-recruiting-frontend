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

export const divider = style({
  height: '1px',
  backgroundColor: '#EDEDED',
  alignSelf: 'stretch',
  marginLeft: '-40px',
  marginRight: '-40px',
  '@media': {
    [breakpoints.mobile]: {
      marginLeft: '-20px',
      marginRight: '-20px',
    },
  },
});

// divider를 :not()으로 아예 제외 → override 필요 없이 처음부터 margin 안 붙음
globalStyle(`${wrapper} > * + *:not(${divider})`, {
  marginTop: '232px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '100px' },
  },
});

// divider 추가로 PartIntroduction이 3번째 child로 이동
globalStyle(`${wrapper} > *:nth-child(3)`, {
  marginTop: '60px',
  '@media': {
    [breakpoints.tablet]: { marginTop: '58px' },
    [breakpoints.mobile]: { marginTop: '118px' },
  },
});
