import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  width: '400px',
  padding: '24px',
  backgroundColor: theme.color.subBackground,
  borderRadius: '14px',
  border: 'none',

  '::backdrop': {
    backgroundColor: theme.color.backgroundDimmed,
  },
});
