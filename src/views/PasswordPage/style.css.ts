import { style, styleVariants } from '@vanilla-extract/css';

const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      gap: 50,
      margin: '90px 0 144px 0',
      width: 466,
    },
  ],
  TAB: [
    container,
    {
      gap: 50,
      margin: '75px 0 129px 0',
      width: 367,
    },
  ],
  MOB: [
    container,
    {
      gap: 30,
      margin: '43px 0 75px 0',
      width: 312,
    },
  ],
});
