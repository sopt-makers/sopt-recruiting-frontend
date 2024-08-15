import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  justifyContent: 'center',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      width: 720,
    },
  ],
  TAB: [
    container,
    {
      width: 367,
    },
  ],
  MOB: [
    container,
    {
      width: 312,
    },
  ],
});

const textareaBase = style({
  width: '100%',
  padding: '16px 16px',
  borderRadius: 12,
  backgroundColor: theme.color.background,
  color: theme.color.baseText,
  whiteSpace: 'pre-line',
  wordBreak: 'break-all',
  ...theme.font.BODY_2_16_R,

  ':disabled': {
    color: theme.color.lighterText,
    backgroundColor: theme.color.subBackground,
    cursor: 'not-allowed',
  },

  '::placeholder': {
    color: theme.color.placeholder,
  },
});

export const textareaHeight = styleVariants({
  sm: {
    height: 112,
  },
  lg: {
    height: 507,
  },
});

export const textareaStyle = styleVariants({
  default: [
    textareaBase,
    {
      border: `1px solid ${theme.color.border}`,
      ':focus': {
        border: `1px solid ${theme.color.primary}`,
      },
    },
  ],
  error: [textareaBase, { border: `1px solid ${theme.color.error}` }],
});

export const bottomStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  ...theme.font.BODY_2_16_R,
});

export const errorMsgStyle = style({
  color: theme.color.error,
  marginRight: 'auto',
  ...theme.font.LABEL_2_16_SB,
});

export const textCountStyle = style({
  color: theme.color.baseText,
});

export const maxCountStyle = style({
  color: theme.color.lighterText,
});
