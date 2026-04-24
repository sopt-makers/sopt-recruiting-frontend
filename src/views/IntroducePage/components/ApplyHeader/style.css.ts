import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

const primaryGradient = `radial-gradient(50% 50% at 50% 50%, rgba(from ${theme.color.primary} r g b / 0.20) 0%, rgba(from ${theme.color.primary} r g b / 0.06) 50%, rgba(from ${theme.color.primary} r g b / 0.00) 100%)`;

const gradientOverlay = {
  content: '""',
  position: 'absolute',
  left: '0',
  right: '0',
  height: '439px',
  transform: 'translateY(-50%)',
  borderRadius: '1024px',
  backgroundImage: primaryGradient,
  zIndex: 0,
  pointerEvents: 'none',
} as const;

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: '48px',
});

export const recruitingHeaderContainerVar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '40px',

  '@media': {
    [breakpoints.tablet]: { gap: '40px' },
    [breakpoints.mobile]: { gap: '48px' },
  },
});

export const notificationContainerVar = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '80px',
  gap: '64px',

  selectors: {
    '&::before': { ...gradientOverlay, top: '80%' },
  },

  '@media': {
    [breakpoints.tabletAndMobile]: { gap: '40px' },
  },
});

export const recruitingHeaderContentVar = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '64px',

  '@media': {
    [breakpoints.mobile]: { gap: '48px' },
  },
});

export const recruitingHeaderContentInner = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '16px',

  '@media': {
    [breakpoints.mobile]: { gap: '8px' },
  },
});

export const recruitingHeaderImageWrapperVar = style({
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.00) 100%)',
  width: '100%',
});

export const recruitingHeaderImageVar = style({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  '@media': {
    [breakpoints.tablet]: { height: '100px', objectFit: 'contain' },
    [breakpoints.mobile]: { height: '75px', objectFit: 'contain' },
  },
});

export const titleVar = style({
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.HEADING_1_48_B,

  '@media': {
    [breakpoints.tablet]: { ...theme.font.HEADING_4_24_B },
    [breakpoints.mobile]: { ...theme.font.HEADING_5_20_B },
  },
});

export const recruitmentInfoVar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const dateVar = style({
  ...theme.font.HEADING_4_24_B,

  '@media': {
    [breakpoints.tablet]: { ...theme.font.HEADING_5_20_B },
    [breakpoints.mobile]: { ...theme.font.TITLE_7_14_SB },
  },
});

export const buttonVar = style({
  width: '600px',
  padding: '18px 40px',
  backgroundColor: theme.color.primary,
  ...theme.font.HEADING_4_24_B,

  ':hover': { backgroundColor: theme.color.primaryDark },
  ':active': { backgroundColor: theme.color.primaryLight },

  '@media': {
    [breakpoints.tabletAndMobile]: {
      width: '242px',
      padding: '16px 26px',
      ...theme.font.LABEL_1_18_SB,
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',

  selectors: {
    '&::before': { ...gradientOverlay, top: '50%' },
  },
});

export const buttonWrapperInner = style({
  position: 'relative',
  zIndex: 1,
});
