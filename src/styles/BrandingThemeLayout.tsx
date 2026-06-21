import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type ReactNode } from 'react';

import { useTheme } from 'contexts/ThemeProvider';
import { dark, light, theme } from 'styles/theme.css';
import useRecruitInfo from 'views/IntroducePage/hooks/useRecruitInfo';
import type { RecruitInfoResponse } from 'views/IntroducePage/types';

type SoptBrandingColor = RecruitInfoResponse['brandingColor'];

const BrandingThemeLayout = ({ children }: { children: ReactNode }) => {
  const { isLight } = useTheme();
  const { data } = useRecruitInfo();

  const brandingColor = data?.brandingColor ? toThemeStyle(data.brandingColor, isLight) : undefined;

  return (
    <div className={isLight ? light : dark} style={brandingColor}>
      {children}
    </div>
  );
};

export default BrandingThemeLayout;

const toCssColor = (color: string) => {
  if (color.startsWith('#')) return color;
  if (/^[0-9A-Fa-f]{3,8}$/.test(color)) return `#${color}`;

  return color;
};

const toThemeStyle = (color: SoptBrandingColor, isLight: boolean) => {
  const keyColor = isLight ? color.lightModeKeyColor : color.darkModeKeyColor;
  const otherKeyColor = isLight ? color.darkModeKeyColor : color.lightModeKeyColor;

  return assignInlineVars({
    [theme.color.primary]: toCssColor(keyColor),
    [theme.color.primaryDark]: toCssColor(otherKeyColor),
    [theme.color.primaryLight]: toCssColor(keyColor),
    [theme.color.primaryPoint]: toCssColor(keyColor),
    [theme.color.primaryAlpha10]: `${toCssColor(keyColor)}1a`,
  });
};
