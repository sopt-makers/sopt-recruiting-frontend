import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  ...theme.font.BODY_1_18_M,
});
