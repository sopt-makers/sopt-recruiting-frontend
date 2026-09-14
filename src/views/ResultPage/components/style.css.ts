import { colors } from '@sopt-makers/colors';
import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { Z_INDEX } from '@constants/zIndex';
import { theme } from 'styles/theme.css';

export const container = style({
  position: 'relative',
  width: '100%',
  minHeight: 'calc(100dvh - 48px)',
  overflow: 'hidden',
  '@media': {
    'screen and (min-width: 1024px)': {
      minHeight: 'calc(100dvh - 80px)',
    },
  },
});

export const finalResultTitle = style({
  ...theme.font.HEADING_4_24_B,
  '@media': {
    'screen and (min-width: 429px)': {
      ...theme.font.HEADING_1_48_B,
      // 26.9.14 기준 아직 mds 1버전 사용중이어서 최신 폰트, 피그마에도 mds2.0버전이 적용 안되어있는 상황입니다.
      // 이후 디자인에서도 mds2.0버전 적용되면 아래 주석 제거하고 최신 폰트로 변경해야될것 같습니다.
      fontSize: 40,
      lineHeight: '60px',
      letterSpacing: -0.8,
    },
  },
});

export const contentWrapper = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: Z_INDEX.resultContent,
    color: theme.color.baseText,
  },
  variants: {
    deviceType: {
      DESK: {
        margin: '90px auto 0',
        width: 720,
        gap: 50,
        ...theme.font.BODY_1_18_M,
        fontWeight: 400,
      },
      TAB: {
        margin: '122px auto 0',
        width: 367,
        gap: 50,
        ...theme.font.BODY_1_18_M,
        fontWeight: 400,
      },
      MOB: {
        margin: '43px auto 0',
        width: 312,
        gap: 30,
        ...theme.font.BODY_3_14_M,
        fontWeight: 400,
        '@media': {
          'screen and (min-width: 429px) and (max-width: 767px)': {
            marginTop: 122,
            width: 367,
            gap: 50,
            ...theme.font.BODY_1_18_M,
            fontWeight: 400,
          },
        },
      },
    },
  },
});

export const finalResultContent = style({
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  zIndex: Z_INDEX.resultContent,
});

export const content = recipe({
  base: {
    whiteSpace: 'pre-line',
    zIndex: Z_INDEX.resultContent,
  },
  variants: {
    deviceType: {
      DESK: { paddingBottom: 202 },
      TAB: { paddingBottom: 170 },
      MOB: { paddingBottom: 107 },
    },
  },
});

export const nonDesktopLineBreak = style({
  '@media': {
    'screen and (min-width: 1024px)': {
      display: 'none',
    },
  },
});

export const strongText = recipe({
  variants: {
    brand: {
      sopt: {
        color: theme.color.primary,
        fontWeight: 600,
      },
      makers: {
        color: colors.secondary,
        fontWeight: 600,
      },
    },
  },
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

export const bottomAnimation = recipe({
  base: {
    position: 'absolute',
    bottom: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: 100,
    borderRadius: '100%',
    zIndex: Z_INDEX.resultAnim,
  },
  variants: {
    brand: {
      sopt: {
        animation: `${animatedGradient(theme.color.primary)} ease-in-out 3s alternate infinite`,
      },
      makers: {
        animation: `${animatedGradient('#d8d8d8')} ease-in-out 3s alternate infinite`,
      },
    },
  },
});

export const bottomImg = recipe({
  base: {
    position: 'absolute',
    right: 'calc(24px + (166 * ((100vw - 375px) / 1065)))',
    zIndex: Z_INDEX.resultAnim,
  },
  variants: {
    deviceType: {
      DESK: { bottom: -30 },
      TAB: { bottom: -20 },
      MOB: { bottom: 100 },
    },
  },
});

export const finalResultImage = style({
  position: 'relative',
  width: 'fit-content',
  margin: '36px auto 0',
  zIndex: Z_INDEX.resultContent,
  pointerEvents: 'none',
  '@media': {
    'screen and (min-width: 1024px)': {
      margin: '36px 120px 0 auto',
    },
  },
});

const expandedSoptGradient = keyframes({
  '0%': {
    width: '60%',
    boxShadow: `0px 0px 260px 190px ${theme.color.primary}`,
  },
  '100%': {
    width: '110%',
    boxShadow: `0px 0px 260px 260px ${theme.color.primary}`,
  },
});

export const finalResultBottomAnimation = style([
  {
    position: 'absolute',
    bottom: '-100px',
    left: '50%',
    transform: 'translateX(-50%)',
    height: 100,
    borderRadius: '100%',
    zIndex: Z_INDEX.resultAnim,
    opacity: 0.15,
    animation: `${expandedSoptGradient} ease-in-out 3s alternate infinite`,
  },
]);

export const finalResultImageAsset = style({
  '@media': {
    'screen and (min-width: 429px) and (max-width: 1023px)': {
      width: 377,
      height: 211,
    },
  },
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

export const scrollBottomGrad = recipe({
  base: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: Z_INDEX.resultGrad,
  },
  variants: {
    deviceType: {
      DESK: { height: 220 },
      TAB: { height: 170 },
      MOB: { height: 110 },
    },
  },
});
