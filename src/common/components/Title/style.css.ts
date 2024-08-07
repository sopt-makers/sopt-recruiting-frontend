import { styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const headingVar = styleVariants({
  DESK: {
    /* Heading/40_B */
    ...theme.font.HEADING_1_48_B,
    fontSize: 40,
    lineHeight: '60px',
    letterSpacing: -0.8,
    color: theme.color.baseText,
  },
  TAB: {
    /* Heading/40_B */
    ...theme.font.HEADING_1_48_B,
    fontSize: 40,
    lineHeight: '60px',
    letterSpacing: -0.8,
    color: theme.color.baseText,
  },
  MOB: {
    ...theme.font.HEADING_4_24_B,
  },
});
