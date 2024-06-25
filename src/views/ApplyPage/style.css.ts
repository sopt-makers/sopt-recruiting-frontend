import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,

  marginBottom: 362,
  width: 720,
});

export const content = style({
  paddingTop: 90,
});
