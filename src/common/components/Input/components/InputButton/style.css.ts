import { style, styleVariants } from '@vanilla-extract/css';

export const button = style({
  paddingLeft: 0,
  paddingRight: 0,
});
export const buttonVar = styleVariants({
  DESK: [
    button,
    {
      width: 148,
    },
  ],
  TAB: [
    button,
    {
      width: 116,
    },
  ],
  MOB: [
    button,
    {
      width: 99,
    },
  ],
});
