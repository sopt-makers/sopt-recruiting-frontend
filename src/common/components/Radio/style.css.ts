import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  width: 'fit-content',
});

const inputBase = style({
  borderRadius: '50%',
  width: '22px',
  height: '22px',
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
    outlineOffset: '2px',
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

export const errorStyle = style({
  color: theme.color.error,
  marginTop: '6px',
  ...theme.font.LABEL_2_16_SB,
});
