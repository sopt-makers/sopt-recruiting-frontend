import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,

  margin: '90px 0 168px 0',
  width: 466,
});

export const calloutButton = style({
  marginRight: 18,
  color: theme.color.lighterText,
  ...theme.font.TITLE_5_18_SB,
});
