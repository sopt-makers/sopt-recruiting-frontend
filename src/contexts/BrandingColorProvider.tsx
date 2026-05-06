import { recruitInfoQueryKey } from '@constants/queryKeys';
import { useQueryClient } from '@tanstack/react-query';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { createContext, type ReactNode, useContext, useSyncExternalStore } from 'react';

import { theme } from 'styles/theme.css';

import type { RecruitInfoResponse } from 'views/IntroducePage/types';

export type BrandingColor = RecruitInfoResponse['brandingColor'];

interface BrandingColorContextType {
  brandingColor: BrandingColor | null;
}

const BrandingColorContext = createContext<BrandingColorContextType>({
  brandingColor: null,
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

const useBrandingFromRecruitCache = (): BrandingColor | null => {
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

const BrandingColorProvider = ({ children }: { children: ReactNode }) => {
  const brandingColor = useBrandingFromRecruitCache();
  const themeStyle = brandingColor ? toThemeStyle(brandingColor) : undefined;

  return (
    <BrandingColorContext.Provider value={{ brandingColor }}>
      <div style={themeStyle}>{children}</div>
    </BrandingColorContext.Provider>
  );
};

export default BrandingColorProvider;
