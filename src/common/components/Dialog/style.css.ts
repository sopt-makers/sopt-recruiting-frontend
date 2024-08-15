import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';

const container = style({
  padding: 24,
  backgroundColor: colors.white, // subBackground
  borderRadius: 14,
  border: 'none',

  '::backdrop': {
    backgroundColor: colors.grayAlpha500, // backgroundDimmed
  },
});

export const containerVar = styleVariants({
  DESK: [
    container,
    {
      width: 400,
    },
  ],
  TAB: [
    container,
    {
      width: 400,
    },
  ],
  MOB: [
    container,
    {
      width: 313,
    },
  ],
});
