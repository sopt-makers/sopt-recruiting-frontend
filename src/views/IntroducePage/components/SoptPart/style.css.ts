import { style } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';
import { breakpoints } from 'styles/breakpoints';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '48px',
  '@media': {
    [breakpoints.tablet]: {
      gap: '24px',
    },
    [breakpoints.mobile]: {
      gap: '24px',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
    },
  },
});

export const container = style({
  display: 'grid',
  gridTemplateRows: 'repeat(2, fit-content(100%))',
  gridTemplateColumns: 'repeat(3, fit-content(100%))',
  gap: '16px',
  '@media': {
    [breakpoints.tablet]: {
      gap: '8px',
    },
    [breakpoints.mobile]: {
      display: 'flex',
      width: '100%',
      padding: '0 20px',
      overflowX: 'scroll',
      scrollSnapType: 'x mandatory',
      scrollPaddingLeft: '20px',
      gap: '12px',
      scrollbarWidth: 'none',
      scrollBehavior: 'smooth',
    },
  },
});

export const itemWrapper = style({
  display: 'flex',
  maxWidth: '380px',
  flexDirection: 'column',
  backgroundColor: '#f6f6f6',
  borderRadius: '24px',
  padding: '38px 40px',
  cursor: 'pointer',
  '@media': {
    [breakpoints.tablet]: {
      width: '224px',
      height: '200px',
      padding: '20px',
    },
    [breakpoints.mobile]: {
      width: '200px',
      height: '220px',
      padding: '16px',
      flexShrink: 0,
      scrollSnapAlign: 'start',
    },
  },
});

export const name = style({
  paddingTop: '8px',
  ...theme.font.HEADING_2_32_B,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.TITLE_6_16_SB,
    },
  },
});

export const description = style({
  ...theme.font.BODY_1_18_M,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.BODY_4_13_R,
    },
  },
});
