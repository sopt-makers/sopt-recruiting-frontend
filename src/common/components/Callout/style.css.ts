import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const containerBase = style({
  display: 'flex',
  gap: '22px',
  alignItems: 'center',
  width: 'fit-content',
  padding: '28px 28px',
  borderRadius: '15px',
  backgroundColor: theme.color.subBackground,
});

export const container = styleVariants({
  sm: [containerBase, { width: '466px' }],
  lg: [containerBase, { width: '720px' }],
});
