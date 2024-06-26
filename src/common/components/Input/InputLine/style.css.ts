import { style, styleVariants } from '@vanilla-extract/css';

import { formColors } from '@constants/styleValues';
import { theme } from 'styles/theme.css';

export const inputLine = style({
  display: 'flex',
  gap: 10,

  position: 'relative',
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
