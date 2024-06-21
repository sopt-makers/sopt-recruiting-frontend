import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
  justifyContent: 'center',
  margin: 90,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 466,
  height: 433,
  padding: '38px 80px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: 18,
});
