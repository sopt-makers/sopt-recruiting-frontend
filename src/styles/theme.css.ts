import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

const root = createGlobalTheme('#root', {});

const theme = createThemeContract({
  color: null,
  background: null,
});

export const light = createTheme(theme, {
  color: 'white',
  background: 'black',
});

export const dark = createTheme(theme, {
  color: 'black',
  background: 'white',
});

export const vars = { ...root, theme };
