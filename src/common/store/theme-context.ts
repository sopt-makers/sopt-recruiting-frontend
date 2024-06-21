import { createContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleDarkMode: () => {},
});
