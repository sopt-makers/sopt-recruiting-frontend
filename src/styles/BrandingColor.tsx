import { recruitInfoQueryKey } from '@constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type ReactNode, useSyncExternalStore } from 'react';

import { theme } from 'styles/theme.css';

import type { RecruitInfoResponse } from 'views/IntroducePage/types';

type SoptBrandingColor = RecruitInfoResponse['brandingColor'];

const toCssColor = (hex: string) => (hex.startsWith('#') ? hex : `#${hex}`);

const toThemeStyle = (color: SoptBrandingColor) =>
  assignInlineVars({
    [theme.color.primary]: toCssColor(color.main),
    [theme.color.primaryDark]: toCssColor(color.high),
    [theme.color.primaryLight]: toCssColor(color.low),
    [theme.color.primaryLinear]: toCssColor(color.point),
    [theme.color.primaryAlpha10]: `${toCssColor(color.main)}1a`,
  });

const useBrandingColorCache = () => {
  const queryClient = useQueryClient();

  return useSyncExternalStore(
    (onStoreChange) =>
      queryClient.getQueryCache().subscribe((event) => {
        // recruitInfo 외 쿼리 변경 시 불필요한 리렌더 방지
        if (event.query.queryKey[0] === recruitInfoQueryKey[0]) {
          onStoreChange();
        }
      }),
    () => queryClient.getQueryData<RecruitInfoResponse>(recruitInfoQueryKey)?.brandingColor ?? null,
    () => null,
  );
};

const BrandingColor = ({ children }: { children: ReactNode }) => {
  const brandingColor = useBrandingColorCache();
  const themeStyle = brandingColor ? toThemeStyle(brandingColor) : undefined;

  return <div style={themeStyle}>{children}</div>;
};

export default BrandingColor;
