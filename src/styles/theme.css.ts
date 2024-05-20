import { colors } from '@sopt-makers/colors';
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';
import { fonts } from './font.css';

const root = createGlobalTheme('#root', {});

const theme = createThemeContract({
  fonts: fonts,
  colors: colors,
});

export const light = createTheme(theme, {
  fonts: fonts,
  colors: colors,
});

export const dark = createTheme(theme, {
  fonts: fonts,
  colors: colors,
});

export const vars = { ...root, theme };
