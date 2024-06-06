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

export const selectContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 9,
  position: 'relative',
});

export const select = style({
  display: 'flex',

  flex: 1,

  padding: 16,
  backgroundColor: theme.color.white,
  borderRadius: 12,
  border: `1px solid ${theme.color.border}`,

  color: theme.color.placeholder,
  ...theme.font.BODY_2_16_R,

  ':focus': {
    borderColor: theme.color.primary,
  },

  ':disabled': {
    backgroundColor: theme.color.subBackground, // gray30 -> 20으로 수정해야함
    color: theme.color.lighterText,
  },
});
const selectColors = {
  default: {
    color: theme.color.placeholder,
  },
  selected: {
    color: theme.color.baseText,
  },
  error: {
    borderColor: theme.color.error,
  },
};
export const selectVariant = styleVariants(selectColors, (styles) => [
  select,
  {
    ...styles,
  },
]);

export const icon = style({
  position: 'absolute',
  top: 17,
  right: 16,
  width: 24,
  color: theme.color.lighterText,

  transition: 'transform 0.1s ease-out 0.2s',

  selectors: {
    [`${select}:focus+&`]: {
      transform: 'rotate(180deg)',
    },
    [`${select}:disabled+&`]: {
      display: 'none',
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

  position: 'absolute',
  width: '100%',
  top: 50,

  padding: '15px 16px',

  backgroundColor: theme.color.white,

  borderRadius: 12,
  border: `1px solid ${theme.color.border}`,

  opacity: 0,
  transition: '0.3s ease-in-out',

  selectors: {
    [`${select}:focus~&`]: {
      opacity: 1,
      transform: 'translateY(17px)',
    },
  },
});
export const option = style({
  padding: '13px 0px 13px 0px', // label 선택영역 확장

  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,

  cursor: 'pointer',

  selectors: {
    'input:checked+&': {
      ...theme.font.TITLE_6_16_SB,
      color: theme.color.baseText,
    },
  },
});

export const error = style({
  ...theme.font.LABEL_2_16_SB,
  color: theme.color.error,
});
