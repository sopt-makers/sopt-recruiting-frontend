import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

// ApplyPage.tsx
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const formContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 100,

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

export const sectionTitleVar = styleVariants({
  DESK: {
    ...theme.font.TITLE_2_28_SB,
    color: theme.color.baseText,
  },
  TAB: {
    ...theme.font.TITLE_3_24_SB,
    color: theme.color.baseText,
  },
  MOB: {
    ...theme.font.TITLE_5_18_SB,
    color: theme.color.baseText,
  },
});
