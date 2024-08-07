import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const menuItem = style({
  ...theme.font.HEADING_6_18_B,
});

export const menuItemVar = styleVariants({
  DESK: [
    menuItem,
    {
      color: theme.color.baseText,
    },
  ],
  TAB: [
    menuItem,
    {
      color: theme.color.grayButtonFill,
    },
  ],
  MOB: [
    menuItem,
    {
      color: theme.color.grayButtonFill,
    },
  ],
});

const menuLink = style({
  textDecoration: `underline transparent 2px`,
  textUnderlineOffset: 21,
  transition: 'all 0.2s ease-out',
  cursor: 'pointer',
});

export const menuLinkVar = styleVariants(
  {
    DESK: {
      hover: {
        textDecorationColor: theme.color.primary,
      },
      active: {
        color: theme.color.primary,
      },
    },
    TAB: {
      hover: {
        color: theme.color.whiteButtonFill,
      },
      active: {
        color: theme.color.whiteButtonFill,
      },
    },
    MOB: {
      hover: {
        color: theme.color.whiteButtonFill,
      },
      active: {
        color: theme.color.whiteButtonFill,
      },
    },
  },
  ({ hover, active }) => [
    menuLink,
    {
      selectors: {
        '&:hover:not([disabled])': hover,
        '&.active': active,
      },
    },
  ],
);
