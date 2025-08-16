import { colors } from '@sopt-makers/colors';
import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'styles/theme.css';

const mainText = style({
  color: colors.gray950,
});

export const mainTextVar = styleVariants({
  DESK: [
    mainText,
    {
      ...theme.font.HEADING_5_20_B,
    },
  ],
  TAB: [
    mainText,
    {
      ...theme.font.HEADING_5_20_B,
    },
  ],
  MOB: [
    mainText,
    {
      ...theme.font.HEADING_7_16_B,
    },
  ],
});

const subText = style({
  marginTop: 2,
  color: colors.gray300,
  ...theme.font.BODY_2_16_M,
});

export const subTextVar = styleVariants({
  DESK: [
    subText,
    {
      ...theme.font.BODY_2_16_M,
    },
  ],
  TAB: [
    subText,
    {
      ...theme.font.BODY_2_16_M,
    },
  ],
  MOB: [
    subText,
    {
      ...theme.font.BODY_3_14_M,
    },
  ],
});

const buttonWrapper = style({
  display: 'flex',

  alignItems: 'center',
  justifyContent: 'flex-end',
  marginLeft: 'auto',
  marginTop: 20,
});

export const buttonWrapperVar = styleVariants({
  DESK: [
    buttonWrapper,
    {
      gap: 12,
    },
  ],
  TAB: [
    buttonWrapper,
    {
      gap: 12,
    },
  ],
  MOB: [
    buttonWrapper,
    {
      gap: 8,
    },
  ],
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
      // backgroundColor: colors.gray600,
      backgroundColor: theme.color.primary,
    },
  ],
  line: [
    buttonOutsideBase,
    {
      // color: colors.gray600,
      // boxShadow: `0 0 0 1px ${colors.gray600}`,
      color: theme.color.primary,
      boxShadow: `0 0 0 1px ${theme.color.primary}`,
    },
  ],
  disabled: [
    buttonOutsideBase,
    {
      boxShadow: 'none',
    },
  ],
});

export const buttonOutsideVar = styleVariants({
  DESK: { ...theme.font.LABEL_3_14_SB },
  TAB: { ...theme.font.LABEL_3_14_SB },
  MOB: { ...theme.font.LABEL_4_12_SB },
});

const buttonInsideBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  padding: '13px 20px',
  borderRadius: 12,
  transition: 'background-color 0.3s ease-out',

  ':active': {
    margin: '0 auto',
    borderRadius: '100%',
    width: '50%',
    whiteSpace: 'nowrap',
  },

  selectors: {
    '&:disabled, &:disabled:hover': {
      backgroundColor: colors.gray50,
      cursor: 'not-allowed',
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
      // backgroundColor: colors.gray600,
      backgroundColor: theme.color.primary,

      ':hover': {
        // backgroundColor: colors.gray950,
        backgroundColor: theme.color.primaryLight,
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
      // color: colors.gray600,
      color: theme.color.primary,

      // FIXME: gray20으로 수정해야 함.
      ':hover': {
        backgroundColor: colors.gray30,
      },
    },
  ],
});
