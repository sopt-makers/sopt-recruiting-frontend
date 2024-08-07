import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const timer = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  color: theme.color.lighterText,

  lineHeight: 'inherit',
});

export const timerVar = styleVariants({
  DESK: [
    timer,
    {
      right: 172,
      ...theme.font.BODY_2_16_R,
    },
  ],
  TAB: [
    timer,
    {
      right: 137,
      ...theme.font.BODY_2_16_R,
    },
  ],
  MOB: [
    timer,
    {
      right: 122,
      ...theme.font.BODY_4_13_R,
    },
  ],
});
