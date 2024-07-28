import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const description = style({
  display: 'flex',
  gap: 10,

  color: theme.color.lightestText,
  ...theme.font.LABEL_2_16_SB,
});

export const descriptionVar = styleVariants(
  {
    default: theme.color.lightestText,
    error: theme.color.error,
  },
  (color) => [
    description,
    {
      color,
    },
  ],
);
