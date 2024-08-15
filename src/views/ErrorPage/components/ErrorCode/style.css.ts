import { style, styleVariants } from '@vanilla-extract/css';

const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const iconWrapperVar = styleVariants({
  DESK: [
    iconWrapper,
    {
      marginBottom: 43,
    },
  ],
  TAB: [
    iconWrapper,
    {
      marginBottom: 43,
    },
  ],
  MOB: [
    iconWrapper,
    {
      marginBottom: 24,
    },
  ],
});

export const frontText = style({
  transform: 'translateX(73px)',
  transition: 'all 0.3s ease',

  selectors: {
    [`${iconWrapper}:hover &`]: {
      transform: 'translateX(0)',
    },
  },
});

const showIcon = style({
  transition: 'all 0.3s ease',

  selectors: {
    [`${iconWrapper}:hover &`]: {
      opacity: 1,
    },
  },
});

export const showIconVar = styleVariants({
  DESK: [
    showIcon,
    {
      opacity: 0,
    },
  ],
  TAB: [
    showIcon,
    {
      opacity: 0,
    },
  ],
  MOB: [
    showIcon,
    {
      opacity: 1,
    },
  ],
});

export const backText = style({
  transform: 'translateX(-73px)',
  transition: 'all 0.3s ease',

  selectors: {
    [`${iconWrapper}:hover &`]: {
      transform: 'translateX(0)',
    },
  },
});
