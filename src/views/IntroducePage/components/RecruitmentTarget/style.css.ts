import { style } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';
import { breakpoints } from 'styles/breakpoints';
import { contentMaxWidth } from 'styles/layout.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tabletAndMobile]: {
      gap: '24px',
    },
  },
});

export const containerWrapper = style([
  contentMaxWidth,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    '@media': {
      [breakpoints.tablet]: {
        gap: '10px',
      },
      [breakpoints.mobile]: {
        flexDirection: 'column',
        gap: '10px',
      },
    },
  },
]);

export const container = style({
  display: 'flex',
  width: '304px',
  height: '228px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '26px 54px',
  gap: '8px',
  borderRadius: '24px',
  backgroundColor: '#F6F6F6',

  '@media': {
    [breakpoints.desktopLarge]: {
      width: '384px',
      height: '285px',
    },
  },
});

export const icon = style({
  textAlign: 'center',
  fontFamily: 'SUIT',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '164%',
  letterSpacing: '-1.16px',
  textTransform: 'uppercase',
  fontSize: '58px',
});

export const description = style({
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.TITLE_3_24_SB,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.TITLE_6_16_SB,
    },
    [breakpoints.desktopLarge]: {
      ...theme.font.TITLE_2_28_SB,
    },
  },
});
