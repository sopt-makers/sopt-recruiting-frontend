import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const menuItem = style({
  ...theme.font.HEADING_6_18_B,

  ':disabled': {
    cursor: 'default',
  },
  selectors: {
    '&:hover:not([disabled])': {
      textDecoration: `underline ${theme.color.primary} 2px`,
      textUnderlineOffset: 21,
    },
  },
});

export const menuItemVar = styleVariants(
  {
    default: {
      color: theme.color.baseText,
    },
    selected: {
      color: theme.color.primary,
    },
  },
  ({ color }) => [
    menuItem,
    {
      color,
    },
  ],
);
