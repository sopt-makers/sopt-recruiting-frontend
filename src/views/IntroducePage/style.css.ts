import { style, styleVariants } from '@vanilla-extract/css';

const wrapperBase = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 40px',
});

export const wrapper = styleVariants({
  DESK: [wrapperBase, { gap: '232px' }],
  TAB: [wrapperBase, { gap: '100px' }],
  MOB: [wrapperBase, { gap: '100px', padding: '0 20px' }],
});
