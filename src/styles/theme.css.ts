import { colors } from '@sopt-makers/colors';
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from '@vanilla-extract/css';

const root = createGlobalTheme('#root', {});

const theme = createThemeContract({
  colors: colors,
});

export const light = createTheme(theme, {
  colors: colors,
});

export const dark = createTheme(theme, {
  colors: colors,
});

export const vars = { ...root, theme };
