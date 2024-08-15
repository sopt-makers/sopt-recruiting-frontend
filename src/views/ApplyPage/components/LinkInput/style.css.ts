import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 12,
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      width: 720,
      padding: '12px 22px',
      ...theme.font.BODY_1_18_M,
    },
  ],
  TAB: [
    container,
    {
      width: 367,
      padding: '12px 14px 11px 22px',
      ...theme.font.BODY_1_18_M,
    },
  ],
  MOB: [
    container,
    {
      width: 312,
      padding: '13px 16px',
      ...theme.font.BODY_3_14_M,
    },
  ],
});

export const label = style({
  width: 'fit-content',
});

export const link = style({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontWeight: 600,

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

export const linkVar = styleVariants({
  DESK: [
    link,
    {
      width: 620,
    },
  ],
  TAB: [
    link,
    {
      width: 267,
    },
  ],
  MOB: [
    link,
    {
      width: 235,
    },
  ],
});
