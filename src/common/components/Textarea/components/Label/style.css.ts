import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const labelStyle = style({
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',
});

export const labelStyleVar = styleVariants({
  DESK: [
    labelStyle,
    {
      width: 720,
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  TAB: [
    labelStyle,
    {
      width: 367,
      ...theme.font.TITLE_5_18_SB,
    },
  ],
  MOB: [
    labelStyle,
    {
      width: 312,
      ...theme.font.TITLE_6_16_SB,
    },
  ],
});

export const requireDot = style({
  position: 'absolute',
  bottom: 5,
  display: 'inline-block',
  borderRadius: '100%',
  width: 8,
  height: 8,
  backgroundColor: theme.color.primary,
  transform: 'translate(3px ,-3px)',
});
