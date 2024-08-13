import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: 50,
  paddingTop: 40,
});

export const title = style({
  ...theme.font.TITLE_2_28_SB,
  color: theme.color.baseText,
});
