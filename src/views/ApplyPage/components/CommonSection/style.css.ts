import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const sectionContainer = style({
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

export const titleVar = styleVariants({
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
