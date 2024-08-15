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
});

export const formContainerVar = styleVariants({
  DESK: [
    formContainer,
    {
      width: 720,
    },
  ],
  TAB: [
    formContainer,
    {
      width: 367,
    },
  ],
  MOB: [
    formContainer,
    {
      width: 312,
    },
  ],
});
export const content = style({});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,

  marginTop: 46,
});

// section common styles

export const sectionTitleVar = styleVariants({
  DESK: {
    width: 720,
    ...theme.font.TITLE_2_28_SB,
    color: theme.color.baseText,
  },
  TAB: {
    width: 367,
    ...theme.font.TITLE_3_24_SB,
    color: theme.color.baseText,
  },
  MOB: {
    width: 312,
    ...theme.font.TITLE_5_18_SB,
    color: theme.color.baseText,
  },
});

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sectionContainerVar = styleVariants({
  DESK: [
    sectionContainer,
    {
      paddingTop: 166,
      gap: 50,
    },
  ],
  TAB: [
    sectionContainer,
    {
      paddingTop: 100,
      gap: 50,
    },
  ],
  MOB: [
    sectionContainer,
    {
      paddingTop: 49,
      gap: 40,
    },
  ],
});
