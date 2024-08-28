import { colors } from '@sopt-makers/colors';
import { createContext, type ReactNode, useContext, useState } from 'react';

export type ModeType = 'light' | 'dark';

export interface ThemeContextType {
  isLight: boolean;
  handleChangeMode: (mode: ModeType) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isLight: true,
  handleChangeMode: () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue) {
    throw new Error('ThemeContext는 ThemeContextProvider 내부에 있어야 함');
  }

  return contextValue;
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState(true);

  const handleChangeMode = (mode: ModeType) => {
    setIsLight(mode === 'light' ? true : false);
    const body = document.body;
    const bodyColor = mode === 'light' ? colors.white : colors.gray950; // theme.color.background
    body.style.backgroundColor = bodyColor;
  };

  const themeContextValue = {
    isLight,
    handleChangeMode,
  };

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
