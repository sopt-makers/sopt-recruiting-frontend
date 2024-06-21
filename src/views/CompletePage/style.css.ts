import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const icon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 66,
  height: 66,
  borderRadius: '50%',
  background: theme.color.primaryLinear,
});
