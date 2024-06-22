import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

export const mainText = style({
  color: colors.gray950,
  ...theme.font.HEADING_5_20_B,
});

export const subText = style({
  marginTop: 2,
  color: colors.gray300,
  ...theme.font.BODY_2_16_M,
});

export const buttonWrapper = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
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
