import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const calloutButton = style({
  marginRight: 18,
  borderBottom: '1px solid currentColor',
  color: theme.color.lighterText,
});

export const calloutButtonVar = styleVariants({
  DESK: [calloutButton, { ...theme.font.TITLE_5_18_SB }],
  TAB: [calloutButton, { ...theme.font.TITLE_6_16_SB }],
  MOB: [calloutButton, { ...theme.font.TITLE_7_14_SB }],
});

export const strongText = style({
  fontStyle: 'italic',
});
