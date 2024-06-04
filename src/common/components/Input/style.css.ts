import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  color: theme.color.black,
  ...theme.font.BODY_1_18_M,
});

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  color: theme.color.baseText,
  ...theme.font.TITLE_5_18_SB,
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});

export const input = style({
  padding: 16,
  backgroundColor: theme.color.white,
  borderRadius: 12,
  border: `1px solid ${theme.color.border}`,

  color: theme.color.baseText,
  ...theme.font.BODY_2_16_R,

  '::placeholder': {
    color: theme.color.placeholder,
    ...theme.font.BODY_2_16_R,
  },
});

export const description = style({
  display: 'flex',
  gap: 10,

  color: theme.color.lightestText,
  ...theme.font.LABEL_2_16_SB,
});

export const error = style({
  color: theme.color.error,
});
