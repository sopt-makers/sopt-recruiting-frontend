import { style, styleVariants } from '@vanilla-extract/css';

import { formColors } from '@constants/styleValues';
import { theme } from 'styles/theme.css';

const inputLine = style({
  display: 'flex',
  gap: 10,

  position: 'relative',
});

export const inputLineVar = styleVariants({
  DESK: [inputLine],
  TAB: [
    inputLine,
    {
      gap: 5,
    },
  ],
  MOB: [
    inputLine,
    {
      gap: 5,
    },
  ],
});

const input = style({
  flex: 1,

  padding: 16,
  backgroundColor: theme.color.white,
  borderRadius: 12,

  ':focus': {
    boxShadow: `0 0 0 1px ${theme.color.primary} inset`,
  },

  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: theme.color.subBackground, // gray30 -> 20으로 수정해야함
    color: theme.color.lighterText,
  },

  selectors: {
    'body &:read-only': {
      cursor: 'not-allowed',
      backgroundColor: theme.color.subBackground,
      color: theme.color.lighterText,
      boxShadow: 'none',
      pointerEvents: 'none',
    },
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

export const inputFontVar = styleVariants(
  {
    DESK: theme.font.BODY_2_16_R,
    TAB: theme.font.BODY_2_16_R,
    MOB: theme.font.BODY_3_14_R,
  },
  (font) => [
    {
      color: theme.color.baseText,
      ...font,

      '::placeholder': {
        color: theme.color.placeholder,
        ...font,
      },
    },
  ],
);
