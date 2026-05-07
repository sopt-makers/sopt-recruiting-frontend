import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

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
      top: '-280px', // PartHeader height + layout common header
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 0,
      pointerEvents: 'none',
      width: '1920px',

      height: 'calc(823px - 80px)', // header 만큼

      borderRadius: '1920px',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(82, 146, 229, 0.20) 0%, rgba(82, 146, 229, 0.06) 50%, rgba(82, 146, 229, 0.00) 100%)',
    },
  },
  '@media': {
    [breakpoints.tablet]: {
      selectors: {
        '&::before': {
          width: '1024px',
          height: '439px',
          borderRadius: '1024px',
        },
      },
    },
    [breakpoints.mobile]: {
      selectors: {
        '&::before': {
          width: '1024px',
          height: '439px',
          borderRadius: '1024px',
          top: '-174px', // PartHeader height + layout common header
        },
      },
    },
  },
});

globalStyle(`${wrapper} > *`, {
  position: 'relative',
  zIndex: 1,
});

globalStyle(`${wrapper} > * + *`, {
  marginTop: '232px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '100px' },
  },
});

// PartIntroduction이 wrapper의 첫 번째 자식
globalStyle(`${wrapper} > *:first-child`, {
  marginTop: '60px',
  '@media': {
    [breakpoints.tabletAndMobile]: { marginTop: '58px' },
  },
});
