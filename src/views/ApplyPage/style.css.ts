import { style } from '@vanilla-extract/css';

// ApplyPage.tsx
export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,

  marginBottom: 362,
  width: 720,
});

export const content = style({});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  marginTop: 46,
});
