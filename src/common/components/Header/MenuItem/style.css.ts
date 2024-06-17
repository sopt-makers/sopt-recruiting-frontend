import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const menuItem = style({
  ...theme.font.HEADING_6_18_B,
  color: theme.color.baseText,
});

export const menuLink = style({
  selectors: {
    '&:hover:not([disabled])': {
      textDecoration: `underline ${theme.color.primary} 2px`,
      textUnderlineOffset: 21,
    },
    '&.active': {
      color: theme.color.primary,
    },
  },
});
