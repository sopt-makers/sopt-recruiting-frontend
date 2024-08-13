import { style, styleVariants } from '@vanilla-extract/css';

const sectionContainer = style({
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
