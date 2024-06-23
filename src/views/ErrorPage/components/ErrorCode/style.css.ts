import { style } from '@vanilla-extract/css';

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 43,
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

export const showIcon = style({
  opacity: 0,
  transition: 'all 0.3s ease',

  selectors: {
    [`${iconWrapper}:hover &`]: {
      opacity: 1,
    },
  },
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
