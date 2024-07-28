import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  width: 'fit-content',
});

const inputBase = style({
  borderRadius: '50%',
  width: 22,
  height: 22,
  transition: 'all 0.3s ease',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.color.subBackground,
  },

  ':checked': {
    border: `6px solid ${theme.color.primary}`,
  },

  ':focus-visible': {
    outline: `2px dotted ${theme.color.primary}`,
    outlineOffset: 2,
  },

  selectors: {
    '&:checked:hover': {
      backgroundColor: theme.color.background,
      border: `6px solid ${theme.color.primaryDark}`,
    },
  },
});

export const inputStyle = styleVariants({
  default: [
    inputBase,
    {
      border: `1.5px solid ${theme.color.border}`,
    },
  ],
  error: [
    inputBase,
    {
      border: `1.5px solid ${theme.color.error}`,
    },
  ],
});

export const labelStyle = style({
  ...theme.font.BODY_2_16_M,
  cursor: 'pointer',
});
