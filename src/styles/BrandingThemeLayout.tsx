import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type ReactNode, useLayoutEffect } from 'react';

import { normalizeHexColor, toAlphaHexColor, toBlendedHexColor } from '@utils/color';
import { useTheme } from 'contexts/ThemeProvider';
import { dark, light, theme } from 'styles/theme.css';
import useRecruitInfo from 'views/IntroducePage/hooks/useRecruitInfo';

const BrandingThemeLayout = ({ children }: { children: ReactNode }) => {
  const { isLight } = useTheme();
  const { data } = useRecruitInfo();

  // 지원자용 리크루팅 사이트는 항상 라이트 모드 키컬러를 사용
  const lightModeKeyColor = data?.brandingColor?.lightModeKeyColor;
  const brandingColor = lightModeKeyColor ? toThemeStyle(lightModeKeyColor) : undefined;

  // portal이라 브랜딩 CSS 변수만 #modal에 동기화
  useLayoutEffect(() => {
    const modalRoot = document.getElementById('modal');

    if (!modalRoot) return;
    modalRoot.classList.add(light);

    const brandingStyle = lightModeKeyColor ? toThemeStyle(lightModeKeyColor) : undefined;

    if (brandingStyle) {
      for (const [key, value] of Object.entries(brandingStyle)) {
        if (value != null) {
          modalRoot.style.setProperty(key, String(value));
        }
      }
    }

    return () => {
      modalRoot.classList.remove(light);

      if (brandingStyle) {
        for (const key of Object.keys(brandingStyle)) {
          modalRoot.style.removeProperty(key);
        }
      }
    };
  }, [lightModeKeyColor]);

  return (
    <div className={isLight ? light : dark} style={brandingColor}>
      {children}
    </div>
  );
};

export default BrandingThemeLayout;

const toThemeStyle = (keyColor: string) => {
  const main = normalizeHexColor(keyColor);

  return assignInlineVars({
    [theme.color.primary]: main,
    [theme.color.primaryDark]: toBlendedHexColor(main, 255, 0.2), // 고명도 (hover) = 키컬러 + 흰 20%
    [theme.color.primaryLight]: toBlendedHexColor(main, 0, 0.1), // 저명도 (active/press) = 키컬러 + 검 10%
    [theme.color.primaryAlpha10]: toAlphaHexColor(main, 0.1), // 키컬러 투명도 10%
  });
};
