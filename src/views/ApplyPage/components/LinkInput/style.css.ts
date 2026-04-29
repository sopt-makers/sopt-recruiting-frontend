import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '12px',
  color: theme.color.lighterText,
  backgroundColor: theme.color.subBackground,
});

export const containerVar = style([
  container,
  {
    width: '720px',
    padding: '12px 22px',
    ...theme.font.BODY_1_18_M,
    '@media': {
      [breakpoints.mobile]: {
        width: '100%',
        padding: '13px 16px',
        ...theme.font.BODY_3_14_M,
      },
    },
  },
]);

export const label = style({
  width: 'fit-content',
});

export const link = style({
  minWidth: '235px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontWeight: 600,

  '::placeholder': {
    color: theme.color.placeholder,
  },

  selectors: {
    '&:not(:placeholder-shown)': {
      textUnderlineOffset: '3px',
      textDecoration: 'underline',
    },
  },
});

export const linkVar = style([
  link,
  {
    width: '620px',
    '@media': {
      [breakpoints.mobile]: {
        width: '100%',
      },
    },
  },
]);
