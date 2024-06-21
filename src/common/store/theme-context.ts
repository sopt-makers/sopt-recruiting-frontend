import { createContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleChangeMode: (mode: 'light' | 'dark') => {},
});
