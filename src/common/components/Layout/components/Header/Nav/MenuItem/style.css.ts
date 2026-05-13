import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const menuItemVar = style({
  ...theme.font.HEADING_6_18_B,
  color: theme.color.baseText,

  '@media': {
    [breakpoints.tabletAndMobile]: {
      ...theme.font.BODY_3_14_M,
      color: theme.color.grayButtonFill,
    },
  },
});

export const menuLinkVar = style({
  textDecoration: `underline transparent 2px`,
  textUnderlineOffset: 21,
  transition: 'all 0.2s ease-out',
  cursor: 'pointer',
  selectors: {
    '&:hover:not([disabled])': {
      textDecorationColor: theme.color.primary,
      color: theme.color.primary,
    },
    '&.active': {
      color: theme.color.primary,
    },
  },
  '@media': {
    [breakpoints.tabletAndMobile]: {
      selectors: {
        '&:hover:not([disabled])': {
          color: theme.color.primary,
        },
        '&.active': {
          color: theme.color.primary,
          fontWeight: 'bolder',
        },
      },
    },
  },
});
