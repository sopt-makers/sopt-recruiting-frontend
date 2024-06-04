import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  justifyContent: 'center',
});

const textareaStyleBase = style({
  width: '720px',
  height: '162px',
  padding: '16px 16px',
  borderRadius: '12px',
  backgroundColor: theme.color.background,
  color: theme.color.baseText,
  ...theme.font.BODY_2_16_R,

  '::placeholder': {
    color: theme.color.placeholder,
  },
});

export const textareaStyle = styleVariants({
  default: [
    textareaStyleBase,
    {
      border: `1px solid ${theme.color.border}`,
      ':focus': {
        border: `1px solid ${theme.color.primary}`,
      },
    },
  ],
  error: [textareaStyleBase, { border: `1px solid ${theme.color.error}` }],
});

export const errorMsgStyle = style({
  color: theme.color.error,
  ...theme.font.LABEL_2_16_SB,
});
