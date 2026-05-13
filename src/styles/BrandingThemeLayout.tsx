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

  // SOPT 기수 컬러
  const brandingColor = data?.brandingColor ? toThemeStyle(data.brandingColor) : undefined;

  return (
    <div className={isLight ? light : dark} style={brandingColor}>
      {children}
    </div>
  );
};

export default BrandingThemeLayout;

const toCssColor = (hex: string) => (hex.startsWith('#') ? hex : `#${hex}`);

const toThemeStyle = (color: SoptBrandingColor) =>
  assignInlineVars({
    [theme.color.primary]: toCssColor(color.main),
    [theme.color.primaryDark]: toCssColor(color.high),
    [theme.color.primaryLight]: toCssColor(color.low),
    [theme.color.primaryLinear]: toCssColor(color.point),
    [theme.color.primaryAlpha10]: `${toCssColor(color.main)}1a`,
  });
