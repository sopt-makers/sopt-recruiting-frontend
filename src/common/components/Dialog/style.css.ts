import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: 400,
  padding: 24,
  backgroundColor: colors.gray30, // subBackground
  borderRadius: 14,
  border: 'none',

  '::backdrop': {
    backgroundColor: colors.grayAlpha500, // backgroundDimmed
  },
});
