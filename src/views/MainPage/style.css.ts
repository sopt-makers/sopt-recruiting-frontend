import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';

export const container = style({
  color: vars.theme.colors.color,
  backgroundColor: vars.theme.colors.backgroundColor,
  ...vars.theme.fonts.LABEL_2_16_SB,
});
