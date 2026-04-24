import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';

const wrapperBase = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '0 40px',
  backgroundColor: colors.gray10,
  scrollBehavior: 'smooth',
});

export const wrapper = styleVariants({
  DESK: [wrapperBase, { gap: '232px' }],
  TAB: [wrapperBase, { gap: '100px' }],
  MOB: [wrapperBase, { gap: '100px', padding: '0 20px' }],
});
