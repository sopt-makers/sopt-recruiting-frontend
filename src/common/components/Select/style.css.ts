import { containerSize } from '@components/Input/constants';
import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 9,

  color: theme.color.black,
  ...theme.font.BODY_1_18_M,
});

export const containerVar = styleVariants(containerSize, (size) => [container, { width: size }]);

export const title = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,

  color: theme.color.baseText,
  ...theme.font.TITLE_5_18_SB,
});

export const circle = style({
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: theme.color.primary,
});

export const select = style({
  display: 'flex',
  justifyContent: 'space-between',
  flex: 1,

  padding: 16,
  backgroundColor: theme.color.white,
  borderRadius: 12,
  border: `1px solid ${theme.color.border}`,

  color: theme.color.baseText,
  ...theme.font.BODY_2_16_R,

  '::placeholder': {
    color: theme.color.placeholder,
    ...theme.font.BODY_2_16_R,
  },

  ':focus': {
    borderColor: theme.color.primary,
  },

  ':disabled': {
    backgroundColor: theme.color.subBackground, // gray30 -> 20으로 수정해야함
    color: theme.color.lighterText,
  },
});

export const icon = style({
  width: 24,
  color: theme.color.lighterText,

  transition: 'transform 0.3s ease-in-out',
  selectors: {
    [`${select}:focus &`]: {
      transform: 'rotate(180deg)',
    },
  },
});

export const errorInput = style({
  borderColor: theme.color.error,
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 13,

  padding: '22px 16px',

  borderRadius: 12,
  border: `1px solid ${theme.color.border}`,

  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',

  selectors: {
    [`${select}:focus+&`]: {
      opacity: 1,
    },
  },
});
export const option = style({
  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,

  cursor: 'pointer',

  ':hover': {
    ...theme.font.TITLE_6_16_SB,
    color: theme.color.baseText,
  },
});
