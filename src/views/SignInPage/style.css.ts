import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      margin: '90px 0 168px 0',
      width: 466,
    },
  ],
  TAB: [
    container,
    {
      margin: '90px 0 172px 0',
      width: 367,
    },
  ],
  MOB: [
    container,
    {
      margin: '43px 0 115px 0',
      width: 312,
    },
  ],
});
