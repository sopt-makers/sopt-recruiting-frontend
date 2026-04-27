import { colors } from '@sopt-makers/colors';
import { style } from '@vanilla-extract/css';
import { breakpoints } from 'styles/breakpoints';

import { theme } from 'styles/theme.css';

export const infoContainerVar = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 50,
});

export const calloutButtonVar = style({
  display: 'flex',
  alignItems: 'center',
  color: theme.color.lighterText,
  ...theme.font.LABEL_2_16_SB,

  '@media': {
    [breakpoints.mobile]: {
      ...theme.font.LABEL_4_12_SB,
    },
  },
});

export const strongText = style({
  fontStyle: 'italic',
});

export const infoTextVar = style({
  color: colors.gray950,
  whiteSpace: 'pre-line',
  ...theme.font.LABEL_2_16_SB,

  '@media': {
    [breakpoints.mobile]: {
      ...theme.font.LABEL_4_12_SB,
    },
  },
});
