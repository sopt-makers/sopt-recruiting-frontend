import { style } from '@vanilla-extract/css';
import { vars } from 'styles/theme.css';
import { fontsObject } from '@sopt-makers/fonts';

export const container = style({
  color: vars.theme.baseFont,
  backgroundColor: vars.theme.background,
  ...fontsObject.BODY_1_18_M,
});
