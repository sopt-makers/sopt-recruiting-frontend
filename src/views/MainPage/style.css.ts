import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';
import { fontsObject } from '@sopt-makers/fonts';

export const container = style({
  color: vars.theme.colors.red50,
  backgroundColor: vars.theme.colors.yellow400,
  ...fontsObject.BODY_1_18_M,
});
