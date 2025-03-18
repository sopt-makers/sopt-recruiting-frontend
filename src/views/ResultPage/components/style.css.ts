import { colors } from '@sopt-makers/colors';
import { keyframes, style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  width: '100%',
  minHeight: 700,
  overflow: 'hidden',
});

const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  color: theme.color.baseText,
  ...theme.font.BODY_1_18_M,
});

export const contentWrapperVar = styleVariants({
  DESK: [
    contentWrapper,
    {
      margin: '90px auto 0',
      width: 720,
      gap: 50,
    },
  ],
  TAB: [
    contentWrapper,
    {
      margin: '90px auto 0',
      width: 367,
      gap: 50,
    },
  ],
  MOB: [
    contentWrapper,
    {
      margin: '43px auto 0',
      width: 312,
      gap: 30,
    },
  ],
});

const content = style({
  whiteSpace: 'pre-line',
  zIndex: Z_INDEX.resultContent,
});

export const contentVar = styleVariants({
  DESK: [
    content,
    {
      paddingBottom: 202,
    },
  ],
  TAB: [
    content,
    {
      paddingBottom: 170,
    },
  ],
  MOB: [
    content,
    {
      paddingBottom: 107,
    },
  ],
});

export const strongText = styleVariants({
  sopt: {
    color: '#67758B',
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
  zIndex: Z_INDEX.resultAnim,
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
  marginBottom: 'calc(56px + (64 * ((100vw - 768px) / 672)))',
  marginRight: 'calc(40px + (60 * ((100vw - 768px) / 672)))',
  width: 584,
});

export const link = style({
  borderBottom: '1px solid currentColor',
});

const scrollBottomGrad = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);',
  zIndex: Z_INDEX.resultGrad,
});

export const scrollBottomGradVar = styleVariants({
  DESK: [
    scrollBottomGrad,
    {
      height: 220,
    },
  ],
  TAB: [
    scrollBottomGrad,
    {
      height: 170,
    },
  ],
  MOB: [
    scrollBottomGrad,
    {
      height: 110,
    },
  ],
});
