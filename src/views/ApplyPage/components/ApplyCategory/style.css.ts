import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const containerBase = style({
  display: 'flex',
  justifyContent: 'center',
  width: 1440,
  margin: '0px auto',

  position: 'sticky',
  top: 178,

  backgroundColor: theme.color.white,
  zIndex: Z_INDEX.applyCategory,
  transition: 'all 0.5s ease',
});

export const container = styleVariants({
  scrollUp: [
    containerBase,
    {
      opacity: 1,
    },
  ],
  scrollDown: [
    containerBase,
    {
      opacity: 0,
      pointerEvents: 'none',
      cursor: 'default',
      transform: 'translateY(-41px)',
    },
  ],
});

export const categoryList = style({
  display: 'flex',
});

export const categoryLinkStyle = style({
  display: 'flex',
  justifyContent: 'center',
  width: 240,
  padding: '26px 0',
  ...theme.font.HEADING_6_18_B,
  color: theme.color.lightestText,
  backgroundColor: theme.color.white,
  borderBottom: `2px solid transparent`,

  transition: 'all 0.2s ease-out',

  selectors: {
    '&:hover': {
      color: theme.color.primary,
      backgroundColor: theme.color.primaryLight,
    },
  },
});

export const activeLinkStyle = style([
  categoryLinkStyle,
  {
    color: theme.color.primary,
    borderBottom: `2px solid ${theme.color.primary}`,
  },
]);
