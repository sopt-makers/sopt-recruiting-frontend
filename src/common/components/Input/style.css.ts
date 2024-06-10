import { formColors } from '@constants/styleValues';
import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

import { containerSize } from './constants';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,

  ...theme.font.BODY_1_18_M,
});

export const containerVar = styleVariants(containerSize, (size) => [container, { width: size }]);

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  width: 'fit-content',

  color: theme.color.baseText,
  ...theme.font.TITLE_5_18_SB,

  cursor: 'pointer',
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});

export const inputLine = style({
  display: 'flex',
  gap: 10,
});

const input = style({
  flex: 1,

  padding: 16,
  backgroundColor: theme.color.white,
  borderRadius: 12,

  color: theme.color.baseText,
  ...theme.font.BODY_2_16_R,

  '::placeholder': {
    color: theme.color.placeholder,
    ...theme.font.BODY_2_16_R,
  },

  ':focus': {
    boxShadow: `0 0 0 1px ${theme.color.primary} inset`,
  },

  ':disabled': {
    backgroundColor: theme.color.subBackground, // gray30 -> 20으로 수정해야함
    color: theme.color.lighterText,
  },
});

export const inputVar = styleVariants(formColors, ({ boxShadow, focusShadow }) => [
  input,
  {
    boxShadow,
    ':focus': {
      boxShadow: focusShadow,
    },
  },
]);

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
