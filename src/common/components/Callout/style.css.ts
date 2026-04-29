import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '28px 28px',
  borderRadius: 15,
  backgroundColor: theme.color.subBackground,
  whiteSpace: 'pre-wrap',
  ...theme.font.HEADING_6_18_B,
  letterSpacing: -0.36,
});

export const container = styleVariants({
  sm: [containerBase, { width: 466 }],
  lg: [containerBase, { width: 720 }],
  TAB: [
    containerBase,
    {
      width: 367,
      padding: '28px 16px',
      ...theme.font.HEADING_7_16_B,
      letterSpacing: '-0.24px',
    },
  ],
  MOB: [
    containerBase,
    {
      width: 312,
      padding: '16px',
      alignItems: 'flex-start',
      ...theme.font.TITLE_7_14_SB,
      letterSpacing: '-0.21px',
    },
  ],
});

export const iconVar = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  color: colors.yellow700,
  fill: colors.yellow200,
  flexShrink: 0,

  '@media': {
    [breakpoints.mobile]: {
      width: '20px',
      height: '20px',
      alignSelf: 'flex-start',
    },
  },
});

const warningWrapper = style({
  display: 'flex',
  gap: '24px',
  alignItems: 'center',
});

export const warningWrapperVar = styleVariants({
  DESK: [warningWrapper],
  TAB: [
    warningWrapper,
    {
      gap: '10px',
    },
  ],
  MOB: [
    warningWrapper,
    {
      gap: '10px',
    },
  ],
});

export const button = style({
  marginTop: 8,
  marginLeft: 'auto',
});

export const buttonVar = styleVariants({
  DESK: [button],
  TAB: [
    button,
    {
      marginTop: 20,
    },
  ],
  MOB: [
    button,
    {
      marginTop: 12,
    },
  ],
});
