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
  position: 'relative',
  display: 'flex',
  maxWidth: '380px',
  height: '284px',
  flexDirection: 'column',
  color: 'inherit',
  textDecoration: 'none',
  backgroundColor: '#f6f6f6',
  borderRadius: '24px',
  padding: '38px 40px',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'border-radius 0.3s ease-out',
  selectors: {
    '&:hover': {
      borderRadius: '48px',
    },
  },
  '@media': {
    [breakpoints.tablet]: {
      width: '224px',
      height: '220px',
      padding: '20px',
      borderRadius: '16px',

      selectors: {
        '&:hover': {
          borderRadius: '32px',
        },
      },
    },
    [breakpoints.mobile]: {
      width: '200px',
      height: '220px',
      padding: '16px',
      flexShrink: 0,
      borderRadius: '16px',
      scrollSnapAlign: 'start',
      selectors: {
        '&:hover': {
          borderRadius: '32px',
        },
      },
    },
  },
});

export const hoverIconBadge = style({
  position: 'absolute',
  right: '24px',
  bottom: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '60px',
  borderRadius: '999px',
  backgroundColor: theme.color.primary,
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(8px)',
  transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, visibility 0.3s ease-out',
  selectors: {
    [`${itemWrapper}:hover &`]: {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0)',
    },
  },
  '@media': {
    [breakpoints.tabletAndMobile]: {
      right: '20px',
      bottom: '20px',
      width: '48px',
      height: '48px',
    },
  },
});

export const hoverIcon = style({
  width: '32px',
  height: '32px',
  color: theme.color.white,
  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: '24px',
      height: '24px',
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
