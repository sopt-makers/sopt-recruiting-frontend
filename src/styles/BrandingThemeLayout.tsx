import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type ReactNode } from 'react';

import { useTheme } from 'contexts/ThemeProvider';
import { dark, light, theme } from 'styles/theme.css';
import useRecruitInfo from 'views/IntroducePage/hooks/useRecruitInfo';
import type { RecruitInfoResponse } from 'views/IntroducePage/types';

type SoptBrandingColor = RecruitInfoResponse['brandingColor'];

// 지원자용 리크루팅 사이트는 항상 라이트 모드 브랜드 컬러를 사용 (공식 홈페이지 레포는 반대로 dark 고정)
const BRAND_COLOR_MODE: 'light' | 'dark' = 'light';

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

// 키컬러에 흰/검을 alpha-blend해서 고명도(hover)/저명도(active) 톤을 파생
const mix = (hex: string, target: number, ratio: number) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const channel = (shift: number) => Math.round(((n >> shift) & 0xff) * (1 - ratio) + target * ratio);
  const toHex = (c: number) => c.toString(16).padStart(2, '0');
  return `#${toHex(channel(16))}${toHex(channel(8))}${toHex(channel(0))}`;
};

const toThemeStyle = (color: SoptBrandingColor) => {
  const main = toCssColor(BRAND_COLOR_MODE === 'light' ? color.lightModeKeyColor : color.darkModeKeyColor);

  return assignInlineVars({
    [theme.color.primary]: main,
    [theme.color.primaryDark]: mix(main, 255, 0.2), // 고명도 (hover) = 키컬러 + 흰 20%
    [theme.color.primaryLight]: mix(main, 0, 0.1), // 저명도 (active/press) = 키컬러 + 검 10%
  });
};
