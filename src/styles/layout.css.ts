import { style } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';

export const contentMaxWidth = style({
  maxWidth: '944px',
  '@media': {
    [breakpoints.desktopLarge]: {
      maxWidth: '1200px',
    },
  },
});
