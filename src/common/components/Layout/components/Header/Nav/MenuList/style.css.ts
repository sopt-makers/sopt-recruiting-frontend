import { style, styleVariants } from '@vanilla-extract/css';

import { Z_INDEX } from '@constants/zIndex';
import { fadeIn, fadeInDown, fadeOut, fadeOutUp } from 'styles/animation.css';
import { theme } from 'styles/theme.css';

export const menuContainerVar = styleVariants({
  open: {
    animation: `${fadeInDown} 0.3s`,
  },
  close: {
    animation: `${fadeOutUp} 0.3s`,
    animationFillMode: 'forwards',
  },
});
export const menuList = style({
  display: 'flex',
  alignItems: 'center',
  gap: 40,
});

const menuMobList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: theme.color.blackBackground,
  zIndex: Z_INDEX.gnbMenu,
});

export const menuMobListVar = styleVariants({
  TAB: [
    menuMobList,
    {
      padding: '92px 40px 40px 40px',
    },
  ],
  MOB: [
    menuMobList,
    {
      padding: '86px 20px 36px 20px',
    },
  ],
});

export const dimmedBg = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  backgroundColor: theme.color.backgroundDimmed,
  zIndex: Z_INDEX.gnbBg,

  cursor: 'pointer',
});

export const dimmedBgVar = styleVariants({
  open: [
    dimmedBg,
    {
      animation: `${fadeIn} 0.3s`,
    },
  ],
  close: [
    dimmedBg,
    {
      animation: `${fadeOut} 0.3s`,
      animationFillMode: 'forwards',
    },
  ],
});
