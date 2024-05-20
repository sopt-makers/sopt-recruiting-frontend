import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const container = style({
  color: vars.theme.colors.red50,
  backgroundColor: vars.theme.colors.yellow400,
  ...vars.theme.fonts.LABEL_2_16_SB,
});
