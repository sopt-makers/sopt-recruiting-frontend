import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const errorStyle = style({
  color: theme.color.error,
  marginTop: 6,
  ...theme.font.LABEL_2_16_SB,
});
