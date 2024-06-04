import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const textareaStyle = style({
  width: '720px',
  height: '162px',
  padding: '16px 16px',
  borderRadius: '12px',
  backgroundColor: theme.color.background,
  border: `1px solid ${theme.color.border}`,
  color: theme.color.baseText,
  ...theme.font.BODY_2_16_R,

  ':focus': {
    border: `1px solid ${theme.color.primary}`,
  },

  '::placeholder': {
    color: theme.color.placeholder,
  },
});
