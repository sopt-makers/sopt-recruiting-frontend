import { style } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const timer = style({
  position: 'absolute',
  right: 172,
  top: '50%',
  transform: 'translateY(-50%)',
  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,
  lineHeight: 'inherit',
});
