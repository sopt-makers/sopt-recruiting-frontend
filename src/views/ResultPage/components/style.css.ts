import { colors } from '@sopt-makers/colors';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  width: '100%',
  height: calc.subtract('100vh', '74px'),
  minHeight: 700,
  overflow: 'hidden',

  '@supports': {
    '(height: 100dvh)': {
      height: calc.subtract('100dvh', '74px'),
    },
  },
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: 720,
  gap: 50,
  margin: '90px auto 0',
  color: theme.color.baseText,
  ...theme.font.BODY_1_18_M,
});

export const content = style({
  whiteSpace: 'pre-line',
  zIndex: Z_INDEX.resultContent,
});

export const strongText = styleVariants({
  sopt: {
    color: theme.color.primary,
  },
  makers: {
    color: colors.secondary,
  },
});

const bottomAnimationBase = style({
  position: 'absolute',
  bottom: '-100px',
  left: '50%',
  transform: 'translateX(-50%)',
  height: 100,
  borderRadius: '100%',
});

const animatedGradient = (bgColor: string) =>
  keyframes({
    '0%': {
      width: '40%',
      boxShadow: `0px 100px 100px 70px ${bgColor}`,
    },

    '100%': {
      width: '80%',
      boxShadow: `0px 100px 100px 100px ${bgColor}`,
    },
  });

export const bottomAnimation = styleVariants(
  {
    sopt: theme.color.primary,
    makers: '#d8d8d8',
  },
  (color) => [
    bottomAnimationBase,
    {
      animation: `${animatedGradient(color)} ease-in-out 3s alternate infinite`,
    },
  ],
);

export const bottomImg = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: 556,
  // height: 556,
});

export const bottomSvg = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: '0px 130px 140px 0px',
  width: 584,
});

export const link = style({
  borderBottom: '1px solid currentColor',
});
