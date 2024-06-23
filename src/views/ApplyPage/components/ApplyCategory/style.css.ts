import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  width: 1440,
  margin: '0px auto',

  position: 'sticky',
  top: 178,

  backgroundColor: theme.color.white,
});

export const categoryList = style({
  display: 'flex',
});

export const categoryItem = style({
  width: 240,
  padding: '26px 0',
  ...theme.font.HEADING_6_18_B,
  color: theme.color.lightestText,
  backgroundColor: theme.color.white,
  transition: 'all 0.1s ease',
  textAlign: 'center',

  ':hover': {
    color: theme.color.primary,
    backgroundColor: theme.color.primaryLight,
  },
});

export const categoryLink = style({
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

export const activeLink = style([
  categoryLink,
  {
    color: theme.color.primary,
    borderBottom: `2px solid ${theme.color.primary}`,
  },
]);
