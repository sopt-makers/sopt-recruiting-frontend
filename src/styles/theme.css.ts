import { colors } from '@sopt-makers/colors';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

const theme = createThemeContract({
  colors: colors,
});

export const light = createTheme(theme, {
  colors: colors,
});

export const dark = createTheme(theme, {
  colors: colors,
});

export const vars = { theme };
