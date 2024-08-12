import { keyframes } from '@vanilla-extract/css';

export const fadeIn = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});
export const fadeOut = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});
export const fadeInDown = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-300px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});
export const fadeOutUp = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '100%': {
    opacity: 0,
    transform: 'translateY(-300px)',
  },
});
