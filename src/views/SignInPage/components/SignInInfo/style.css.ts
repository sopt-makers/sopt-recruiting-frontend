import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const calloutButton = style({
  marginRight: 18,
  borderBottom: '1px solid currentColor',
  color: theme.color.lighterText,
  ...theme.font.TITLE_5_18_SB,
});

export const strongText = style({
  fontStyle: 'italic',
});
