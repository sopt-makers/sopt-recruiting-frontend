import { style, styleVariants } from '@vanilla-extract/css';

const menuIcon = style({
  width: 24,
  height: 24,
  cursor: 'pointer',
  position: 'absolute',
});

export const menuIconVar = styleVariants({
  TAB: [
    menuIcon,
    {
      right: 40,
    },
  ],
  MOB: [
    menuIcon,
    {
      right: 20,
    },
  ],
});
