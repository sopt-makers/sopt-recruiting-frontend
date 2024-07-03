import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  width: 720,
  height: 53,
  padding: '0 22px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 12,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
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
