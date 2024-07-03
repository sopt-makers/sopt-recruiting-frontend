import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  justifyContent: 'center',
});

const inputWrapperBase = style({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  width: 720,
  height: 53,
  padding: '0 22px',
  borderRadius: 12,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const inputWrapper = styleVariants({
  error: [
    inputWrapperBase,
    {
      border: `1px solid ${theme.color.error}`,
    },
  ],
  default: [
    inputWrapperBase,
    {
      border: `1px solid ${theme.color.border}`,
    },
  ],
});

export const label = style({
  cursor: 'pointer',
  ...theme.font.BODY_1_18_M,
});

export const link = style({
  width: 619,
  ...theme.font.HEADING_6_18_B,

  '::placeholder': {
    color: theme.color.placeholder,
  },

  selectors: {
    '&:not(:placeholder-shown)': {
      textUnderlineOffset: 3,
      textDecoration: 'underline',
    },
  },
});

export const error = style({
  color: theme.color.error,
  ...theme.font.LABEL_2_16_SB,
});
