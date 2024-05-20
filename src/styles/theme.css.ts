import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { fonts } from './font.css';

const root = createGlobalTheme('#root', {});

const theme = createThemeContract({
  fonts: fonts,
  colors: {
    color: null,
    backgroundColor: null,
  },
});

export const light = createTheme(theme, {
  fonts: fonts,
  colors: {
    color: 'white',
    backgroundColor: 'black',
  },
});

export const dark = createTheme(theme, {
  fonts: fonts,
  colors: {
    color: 'black',
    backgroundColor: 'white',
  },
});

export const vars = { ...root, theme };
