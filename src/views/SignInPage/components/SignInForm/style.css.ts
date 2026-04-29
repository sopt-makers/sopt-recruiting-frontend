import { style, styleVariants } from '@vanilla-extract/css';

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

const inputWrapperBase = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const inputWrapperVar = styleVariants({
  withError: [inputWrapperBase],
  withoutError: [inputWrapperBase, { paddingTop: '50px' }],
});

export const newPasswordButton = style({
  borderBottom: '1px solid currentColor',
});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});
