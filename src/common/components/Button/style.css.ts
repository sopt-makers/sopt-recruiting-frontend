import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const outsideBoxBase = style({
  width: 'fit-content',
  borderRadius: '12px',
});

export const outsideBox = styleVariants({
  solid: [
    outsideBoxBase,
    {
      color: theme.color.white,
      backgroundColor: theme.color.primary,
    },
  ],
  line: [
    outsideBoxBase,
    {
      color: theme.color.primary,
      boxShadow: `0 0 0 1px ${theme.color.primary}`,
    },
  ],
});

export const disableStyle = style({
  boxShadow: 'none',
});

const containerBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '15px 32px',
  borderRadius: '12px',
  transition: 'background-color 0.3s ease-out',
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
      ':active': {
        margin: '0 auto',
        borderRadius: '100%',
        width: '50%',
        whiteSpace: 'nowrap',
      },

      selectors: {
        '&:disabled:active': {
          width: '100%',
          margin: 'none',
          borderRadius: '12px',
          whiteSpace: 'pre-line',
        },
      },
    },
  ],
  line: [
    containerBase,
    {
      color: theme.color.primary,

      ':hover': {
        backgroundColor: theme.color.subBackground,
      },

      ':active': {
        margin: '0 auto',
        borderRadius: '100%',
        width: '50%',
        whiteSpace: 'nowrap',
      },

      selectors: {
        '&:disabled:active': {
          width: '100%',
          margin: 'none',
          borderRadius: '12px',
          whiteSpace: 'nowrap',
        },
      },
    },
  ],
});
