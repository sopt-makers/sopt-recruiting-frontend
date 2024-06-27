import { style } from '@vanilla-extract/css';

// ApplyPage.tsx
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

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  marginTop: 46,
});
