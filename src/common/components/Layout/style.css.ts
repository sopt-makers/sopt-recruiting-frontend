import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 1440,
  paddingTop: 74,
  backgroundColor: theme.color.background,
});
