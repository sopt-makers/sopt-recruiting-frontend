import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '15px 32px',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  ...theme.font.TITLE_5_18_SB,

  selectors: {
    '&:disabled': {
      backgroundColor: theme.color.buttonDisable,
      cursor: 'default',
      boxShadow: 'none',
      color: theme.color.white,
    },

    '&:disabled:hover': {
      backgroundColor: theme.color.buttonDisable,
    },
  },
});

export const container = styleVariants({
  solid: [
    containerBase,
    {
      color: theme.color.white,
      backgroundColor: theme.color.primary,
      ':hover': {
        backgroundColor: theme.color.primaryDark,
      },
    },
  ],
  line: [
    containerBase,
    {
      color: theme.color.primary,
      boxShadow: `0 0 0 1px ${theme.color.primary}`,
      ':hover': {
        backgroundColor: theme.color.subBackground,
      },
    },
  ],
});
