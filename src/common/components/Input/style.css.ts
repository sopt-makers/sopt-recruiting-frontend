import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const success = style({
  color: theme.color.primary,
  ...theme.font.LABEL_2_16_SB,
});
