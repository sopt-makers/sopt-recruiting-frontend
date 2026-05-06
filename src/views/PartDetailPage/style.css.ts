import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { primaryGradient } from 'styles/gradient.css';

export const wrapper = style({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 40px 100px 40px',
  scrollBehavior: 'smooth',
  selectors: {
    '&::before': {
      content: '',
      position: 'absolute',
      top: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 0,
      pointerEvents: 'none',
      width: '1920px',

      height: 'calc(823px - 80px)', // header 만큼

      background: primaryGradient,
    },
  },
  '@media': {
    'screen and (min-width: 1024px) and (max-width: 1259px)': {
      selectors: {
        '&::before': {
          width: '1024px',
          height: '439px',
          borderRadius: '1024px',
        },
      },
    },
    [breakpoints.tablet]: {
      selectors: {
        '&::before': {
          width: '768px',
          height: '329px',
          borderRadius: '768px',
        },
      },
    },
    [breakpoints.mobile]: {
      padding: '0 20px 100px 20px',
      selectors: {
        '&::before': {
          width: '360px',
          height: '154px',
          borderRadius: '360px',
          background: primaryGradient,
        },
      },
    },
  },
});

export const divider = style({
  position: 'relative',
  zIndex: 1,
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

globalStyle(`${wrapper} > *`, {
  position: 'relative',
  zIndex: 1,
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
