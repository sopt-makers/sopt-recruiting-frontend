import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from 'styles/theme.css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const label = style({
  color: theme.color.primary,
});

export const labelVar = styleVariants({
  DESK: [
    label,
    {
      ...theme.font.BODY_2_16_M,
    },
  ],
  TAB: [
    label,
    {
      ...theme.font.LABEL_4_12_SB,
    },
  ],
  MOB: [
    label,
    {
      ...theme.font.LABEL_4_12_SB,
    },
  ],
});

export const titleVar = styleVariants({
  DESK: {
    ...theme.font.HEADING_2_32_B,
  },
  TAB: {
    ...theme.font.HEADING_6_18_B,
  },
  MOB: {
    ...theme.font.HEADING_6_18_B,
  },
});
