import { style, styleVariants } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '24px',
  borderRadius: '20px',
  backgroundColor: theme.color.subBackground,
  whiteSpace: 'pre-wrap',
  ...theme.font.TITLE_5_18_SB,
});

export const container = styleVariants({
  sm: [
    containerBase,
    {
      '@media': {
        [breakpoints.mobile]: {
          padding: '18px',
          ...theme.font.BODY_3_14_M,
        },
      },
    },
  ],
  lg: [
    containerBase,
    {
      width: '720px',
      '@media': {
        [breakpoints.mobile]: {
          width: '100%',
          padding: '18px',
          ...theme.font.BODY_3_14_M,
        },
      },
    },
  ],
});

const warningWrapperBase = style({
  display: 'flex',
  gap: '22px',
  alignItems: 'center',
});

export const warningWrapper = style([
  warningWrapperBase,
  {
    '@media': {
      [breakpoints.mobile]: {
        alignItems: 'flex-start',
        gap: '8px',
      },
    },
  },
]);

export const button = style({
  marginTop: '8px',
  marginLeft: 'auto',
});

export const buttonVar = style([
  button,
  {
    '@media': {
      [breakpoints.tablet]: {
        marginTop: '20px',
      },
      [breakpoints.mobile]: {
        marginTop: '12px',
      },
    },
  },
]);

export const iconAlertVar = style({
  width: '32px',
  minWidth: '32px',
  height: '32px',

  '@media': {
    [breakpoints.mobile]: {
      width: '20px',
      minWidth: '20px',
      height: '20px',
    },
  },
});
