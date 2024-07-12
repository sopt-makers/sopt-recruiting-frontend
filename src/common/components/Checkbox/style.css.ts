import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  position: 'relative',
  width: 'fit-content',
  cursor: 'pointer',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none',
  ...theme.font.BODY_1_18_M,
});

/* 브라우저 디폴트 체크박스 숨기기 */
export const hiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

/* 체크박스 커스텀 */
const checkmarkBase = style({
  height: 22,
  width: 22,
  borderRadius: 5,
  transition: 'all 0.3s ease',

  selectors: {
    /* Create the checkmark/indicator (hidden when not checked) */
    '&:after': {
      content: '',
      position: 'absolute',
      display: 'none',
    },

    /* 마우스 hover시 */
    [`${checkboxContainer}:hover input ~ &`]: {
      backgroundColor: theme.color.subBackground,
    },

    /* 체크되었을 때 배경색 */
    [`${checkboxContainer} input:checked ~ &`]: {
      border: `1px solid ${theme.color.primary}`,
      backgroundColor: theme.color.primary,
    },

    [`${checkboxContainer} input:checked:hover ~ &`]: {
      border: `1px solid ${theme.color.primaryDark}`,
      backgroundColor: theme.color.primaryDark,
    },

    /* 체크되면 체크마크 보이게 하기 */
    [`${checkboxContainer} input:checked ~ &:after`]: {
      display: 'block',
    },

    /* 체크마크 커스텀 */
    [`${checkboxContainer} &:after`]: {
      top: 7,
      left: 8,
      width: 6,
      height: 11,
      border: `solid ${theme.color.white}`,
      borderWidth: '0 1.5px 1.5px 0',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },

    /* focus-visible 속성 */
    [`${checkboxContainer} input:focus-visible ~ &`]: {
      outline: `2px dotted ${theme.color.primary}`,
      outlineOffset: 2,
    },
  },
});

export const checkmark = styleVariants({
  default: [
    checkmarkBase,
    {
      border: `1px solid ${theme.color.border}`,
    },
  ],
  error: [
    checkmarkBase,
    {
      border: `1px solid ${theme.color.error}`,
    },
  ],
});

export const requireDot = style({
  display: 'inline-block',
  borderRadius: '100%',
  width: 8,
  height: 8,
  backgroundColor: theme.color.primary,
  // transform: 'translateY(-3px)',
});

const iconStyleBase = style({
  width: 24,
  height: 24,
  cursor: 'pointer',
  transition: 'all 0.3s ease-out',
});

export const iconStyle = styleVariants({
  default: [
    iconStyleBase,
    {
      transform: 'rotate(0)',
    },
  ],
  isOpen: [
    iconStyleBase,
    {
      transform: 'rotate(180deg)',
    },
  ],
});

export const error = style({
  color: theme.color.error,
  ...theme.font.LABEL_2_16_SB,
});
