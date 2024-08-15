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

// section common styles

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

export const sectionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
