import { createContext } from 'react';

export const ThemeContext = createContext({
  isLight: true,
  handleChangeToLightMode: () => {},
  handleChangeToDarkMode: () => {},
});
