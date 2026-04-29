import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { breakpoints } from 'styles/breakpoints';
import { theme } from 'styles/theme.css';

export const containerBase = style({
  display: 'flex',
  justifyContent: 'center',
  margin: '0px auto',

  position: 'sticky',

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

export const containerVar = style({
  top: '178px',
  '@media': {
    [breakpoints.mobile]: {
      top: '153px',
    },
  },
});

export const categoryList = style({
  display: 'flex',
});

const categoryLinkStyle = style({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: theme.color.white,
  minWidth: '104px',

  transition: 'background-color 0.2s ease-out, color 0.2s ease',

  selectors: {
    '&:hover': {
      color: theme.color.primary,
      // backgroundColor: theme.color.primaryLight,
    },
  },
});

export const activeLinkStyleVar = styleVariants({
  active: {
    color: theme.color.primary,
    borderBottom: `4px solid ${theme.color.primary}`,
  },
  default: {
    color: theme.color.lightestText,
    borderBottom: `2px solid transparent`,
  },
});

export const categoryLinkStyleVar = style([
  categoryLinkStyle,
  {
    width: '240px',
    padding: '26px 0',
    ...theme.font.HEADING_6_18_B,
    '@media': {
      [breakpoints.mobile]: {
        width: 'calc((100vw - 48px) / 3)',
        padding: '16px 0',
        ...theme.font.HEADING_7_16_B,
      },
    },
  },
]);
