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

export const container = style({
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
    [breakpoints.tabletAndMobile]: {
      paddingTop: '40px',
      gap: '40px',
    },
  },
});

export const title = style({
  textAlign: 'center',
  whiteSpace: 'pre-line',
  ...theme.font.HEADING_1_48_B,

  '@media': {
    [breakpoints.tablet]: { ...theme.font.HEADING_4_24_B },
    [breakpoints.mobile]: { ...theme.font.HEADING_5_20_B },
  },
});
