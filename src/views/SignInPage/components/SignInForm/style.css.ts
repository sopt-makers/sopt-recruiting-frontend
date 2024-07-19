import { style } from '@vanilla-extract/css';

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const newPasswordButton = style({
  borderBottom: '1px solid currentColor',
});
