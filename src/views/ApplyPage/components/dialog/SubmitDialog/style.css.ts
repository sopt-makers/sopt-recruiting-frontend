import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const mainText = style({
  marginBottom: 2,
  color: colors.gray950,
  ...theme.font.HEADING_5_20_B,
});

export const subText = style({
  marginBottom: 20,
  color: colors.gray300,
  ...theme.font.BODY_2_16_M,
});

export const infoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 352,
  height: 252,
  padding: '33px 44px',
  // FIXME: gray20으로 수정해야 함.
  backgroundColor: colors.gray30,
  borderRadius: 10,
});

export const infoWrapper = style({
  display: 'flex',
  gap: 48,
  alignItems: 'center',
});

export const infoLabel = style({
  width: 56,
  minWidth: 56,
  color: colors.gray300,
  ...theme.font.BODY_2_16_R,
});

export const infoValue = style({
  color: colors.gray950,
  ...theme.font.BODY_2_16_M,
});

export const checkboxContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: 24,
});

/* Customize the label (the container) */
export const checkboxWrapper = style({
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

/* Hide the browser's default checkbox */
export const hiddenCheckbox = style({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

/* Create a custom checkbox */
export const checkmark = style({
  height: 22,
  width: 22,
  border: `1px solid ${colors.gray50}`,
  borderRadius: 5,
  transition: 'all 0.3s ease',

  selectors: {
    /* Create the checkmark/indicator (hidden when not checked) */
    '&:after': {
      content: '',
      position: 'absolute',
      display: 'none',
    },

    /* On mouse-over, add a grey background color */
    [`${checkboxWrapper}:hover input ~ &`]: {
      // FIXME: gray20으로 수정해야 함.
      backgroundColor: colors.gray30,
    },

    /* When the checkbox is checked, add a blue background */
    [`${checkboxWrapper} input:checked ~ &`]: {
      border: `1px solid #BDEC00`,
      backgroundColor: '#BDEC00',
    },

    [`${checkboxWrapper} input:checked:hover ~ &`]: {
      border: `1px solid #99BF00`,
      backgroundColor: '#99BF00',
    },

    /* Show the checkmark when checked */
    [`${checkboxWrapper} input:checked ~ &:after`]: {
      display: 'block',
    },

    /* Style the checkmark/indicator */
    [`${checkboxWrapper} &:after`]: {
      top: 7,
      left: 8,
      width: 6,
      height: 11,
      border: `solid ${colors.white}`,
      borderWidth: '0 1.5px 1.5px 0',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },

    /* Add focus-visible style to checkmark when input is focused */
    [`${checkboxWrapper} input:focus-visible ~ &`]: {
      outline: `2px dotted #BDEC00`,
      outlineOffset: 2,
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: 20,
});

const buttonOutsideBase = style({
  width: 'fit-content',
  borderRadius: 12,
});

export const buttonOutside = styleVariants({
  solid: [
    buttonOutsideBase,
    {
      color: colors.white,
      backgroundColor: '#BDEC00',
    },
  ],
  line: [
    buttonOutsideBase,
    {
      color: '#BDEC00',
      boxShadow: `0 0 0 1px #BDEC00`,
    },
  ],
  disabled: [
    buttonOutsideBase,
    {
      boxShadow: 'none',
    },
  ],
});

const buttonInsideBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '13px 20px',
  borderRadius: 12,
  transition: 'background-color 0.3s ease-out',
  ...theme.font.LABEL_3_14_SB,

  ':active': {
    margin: '0 auto',
    borderRadius: '100%',
    width: '50%',
    whiteSpace: 'nowrap',
  },

  selectors: {
    '&:disabled, &:disabled:hover': {
      backgroundColor: colors.gray50,
      cursor: 'default',
      boxShadow: 'none',
      color: colors.white,
    },
  },
});

export const buttonInside = styleVariants({
  solid: [
    buttonInsideBase,
    {
      color: colors.white,
      backgroundColor: '#BDEC00',

      ':hover': {
        backgroundColor: '#99BF00',
      },

      selectors: {
        '&:disabled:active': {
          width: '100%',
          margin: 'none',
          borderRadius: '12px',
          whiteSpace: 'pre-line',
        },
      },
    },
  ],
  line: [
    buttonInsideBase,
    {
      color: '#BDEC00',

      // FIXME: gray20으로 수정해야 함.
      ':hover': {
        backgroundColor: colors.gray30,
      },
    },
  ],
});
