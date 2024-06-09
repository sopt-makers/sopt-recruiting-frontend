import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

/* Customize the label (the container) */
export const checkboxContainer = style({
  display: 'block',
  position: 'relative',
  paddingLeft: '26px',
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
  opacity: '0px',
  cursor: 'pointer',
  height: '0px',
  width: '0px',
});

/* Create a custom checkbox */
export const checkmark = style({
  position: 'absolute',
  top: '2.5px',
  left: '0',
  height: '22px',
  width: '22px',
  border: `1px solid ${theme.color.border}`,
  borderRadius: '5px',
  transition: 'all 0.3s ease',

  selectors: {
    /* Create the checkmark/indicator (hidden when not checked) */
    '&:after': {
      content: '',
      position: 'absolute',
      display: 'none',
    },

    /* On mouse-over, add a grey background color */
    [`${checkboxContainer}:hover input ~ &`]: {
      backgroundColor: theme.color.subBackground,
    },

    /* When the checkbox is checked, add a blue background */
    [`${checkboxContainer} input:checked ~ &`]: {
      border: `1px solid ${theme.color.primary}`,
      backgroundColor: theme.color.primary,
    },

    [`${checkboxContainer} input:checked:hover ~ &`]: {
      border: `1px solid ${theme.color.primaryDark}`,
      backgroundColor: theme.color.primaryDark,
    },

    /* Show the checkmark when checked */
    [`${checkboxContainer} input:checked ~ &:after`]: {
      display: 'block',
    },

    /* Style the checkmark/indicator */
    [`${checkboxContainer} &:after`]: {
      top: '2.5px',
      left: '7px',
      width: '6px',
      height: '11px',
      border: `solid ${theme.color.white}`,
      borderWidth: '0 1.5px 1.5px 0',
      WebkitTransform: 'rotate(45deg)',
      msTransform: 'rotate(45deg)',
      transform: 'rotate(45deg)',
    },

    /* Add focus-visible style to checkmark when input is focused */
    [`${checkboxContainer} input:focus-visible ~ &`]: {
      outline: `2px dotted ${theme.color.primary}`,
      outlineOffset: '2px',
    },
  },
});

export const requireDot = style({
  display: 'inline-block',
  borderRadius: '100%',
  width: '8px',
  height: '8px',
  backgroundColor: theme.color.primary,
  transform: 'translate(6px ,-3px)',
});

const iconStyleBase = style({
  width: '24px',
  height: '24px',
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
