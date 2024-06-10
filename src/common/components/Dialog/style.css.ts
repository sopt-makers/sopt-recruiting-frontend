import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '400px',
  padding: '24px',
  backgroundColor: colors.gray30, // subBackground
  borderRadius: '14px',
  border: 'none',

  '::backdrop': {
    backgroundColor: colors.grayAlpha500, // backgroundDimmed
  },
});
