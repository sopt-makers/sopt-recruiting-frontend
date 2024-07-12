import { createContext } from 'react';

export type ModeType = 'light' | 'dark';

export interface ThemeContextType {
  isLight: boolean;
  handleChangeMode: (mode: ModeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLight: true,
  handleChangeMode: () => {},
});
