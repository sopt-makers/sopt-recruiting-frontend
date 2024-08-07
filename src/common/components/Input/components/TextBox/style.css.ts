import { style, styleVariants } from '@vanilla-extract/css';

import { containerSize } from '@components/Input/constants';
import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  ...theme.font.BODY_1_18_M,
});

export const containerVar = styleVariants(containerSize, (size) => [container, { width: size }]);

const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  width: 'fit-content',

  color: theme.color.baseText,

  cursor: 'pointer',
});

export const titleVar = styleVariants({
  DESK: [title, { ...theme.font.TITLE_5_18_SB }],
  TAB: [title, { ...theme.font.TITLE_5_18_SB }],
  MOB: [title, { ...theme.font.TITLE_6_16_SB }],
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});
