import { style, styleVariants } from '@vanilla-extract/css';

import { formColors } from '@constants/styleValues';
import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

// Input과 공통되는 스타일 Input style 적용

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
  borderRadius: 12,

  ...theme.font.BODY_2_16_R,
  color: theme.color.placeholder,

  cursor: 'pointer',

  zIndex: Z_INDEX.select,

  transition: '0.3s ease-in-out',

  caretColor: 'transparent',

  ':disabled': {
    backgroundColor: theme.color.subBackground, // gray30 -> 20으로 수정해야함
    color: theme.color.lighterText,
    cursor: 'not-allowed',
  },

  '::placeholder': {
    color: theme.color.placeholder,
  },
});

export const selectVariant = styleVariants(formColors, ({ boxShadow, focusShadow, ...color }) => [
  select,
  {
    boxShadow,
    ':focus': {
      boxShadow: focusShadow,
    },
    ...color,
  },
]);

export const icon = style({
  position: 'absolute',
  top: 17,
  right: 16,
  width: 24,
  color: theme.color.dropdownButton,

  transition: 'transform 0.3s ease-out',

  selectors: {
    [`${select}:focus+&`]: {
      transform: 'rotate(180deg)',
    },
    [`${select}:disabled+&`]: {
      display: 'none',
      cursor: 'not-allowed',
    },
  },
});

export const optionContainer = style({
  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  width: '100%',
  top: 67,

  padding: '15px 8px',
  maxHeight: 224,
  overflow: 'auto',

  backgroundColor: theme.color.white,

  borderRadius: 12,
  boxShadow: `0 0 0 1px ${theme.color.border} inset`,

  opacity: 0,
  transition: '0.3s ease-in-out',
  visibility: 'hidden',
  zIndex: Z_INDEX.options,

  selectors: {
    [`${select}:focus~&`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});
export const optionLabel = style({
  display: 'flex',
  padding: '6px 8px',

  color: theme.color.lighterText,
  ...theme.font.BODY_2_16_R,

  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: theme.color.subBackground,
      borderRadius: 10,
      ...theme.font.BODY_2_16_R,
      color: theme.color.baseText,
    },
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
