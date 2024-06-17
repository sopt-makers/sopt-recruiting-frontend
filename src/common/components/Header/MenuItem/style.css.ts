import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const menuItem = style({
  ...theme.font.HEADING_6_18_B,
  color: theme.color.baseText,
});

export const menuLink = style({
  textDecoration: `underline transparent 2px`,
  textUnderlineOffset: 21,
  transition: 'all 0.3s ease',

  selectors: {
    '&:hover:not([disabled])': {
      textDecorationColor: theme.color.primary,
    },
    '&.active': {
      color: theme.color.primary,
    },
  },
});
