import { assignInlineVars } from '@vanilla-extract/dynamic';
import { createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState } from 'react';

import { theme } from 'styles/theme.css';

export type BrandingColor = {
  main: string;
  high: string;
  low: string;
  point: string;
};

interface BrandingColorContextType {
  brandingColor: BrandingColor | null;
  setBrandingColor: Dispatch<SetStateAction<BrandingColor | null>>;
}

const BrandingColorContext = createContext<BrandingColorContextType>({
  brandingColor: null,
  setBrandingColor: () => {},
});

export const useBrandingColor = () => {
  const contextValue = useContext(BrandingColorContext);

  if (!contextValue) {
    throw new Error('BrandingColorContext는 BrandingColorProvider 내부에 있어야 함');
  }

  return contextValue;
};

const toCssColor = (hex: string) => (hex.startsWith('#') ? hex : `#${hex}`);

const toThemeStyle = (color: BrandingColor) =>
  assignInlineVars({
    [theme.color.primary]: toCssColor(color.main),
    [theme.color.primaryDark]: toCssColor(color.high),
    [theme.color.primaryLight]: toCssColor(color.low),
    [theme.color.primaryLinear]: toCssColor(color.point),
  });

const BrandingColorProvider = ({ children }: { children: ReactNode }) => {
  const [brandingColor, setBrandingColor] = useState<BrandingColor | null>(null);

  const themeStyle = brandingColor ? toThemeStyle(brandingColor) : undefined;

  return (
    <BrandingColorContext.Provider value={{ brandingColor, setBrandingColor }}>
      <div style={themeStyle}>{children}</div>
    </BrandingColorContext.Provider>
  );
};

export default BrandingColorProvider;
