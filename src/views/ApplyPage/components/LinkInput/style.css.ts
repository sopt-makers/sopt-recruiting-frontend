import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  gap: 24,
  alignItems: 'center',
  width: 720,
  height: 53,
  padding: '12px 22px',
  borderRadius: 12,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const label = style({
  width: 'fit-content',
  ...theme.font.BODY_1_18_M,
});

export const link = style({
  width: 'fit-content',
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
