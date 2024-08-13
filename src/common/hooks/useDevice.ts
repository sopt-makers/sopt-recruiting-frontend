import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export type DeviceType = 'TAB' | 'MOB' | 'DESK';
export function useIsTablet(minWidth = '431px', maxWidth = '768px') {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}

export function useIsMobile(maxWidth = '431px') {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width:${maxWidth})`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

export function useDevice({ mobMax, tabMax }: { mobMax?: string; tabMax?: string } = {}): DeviceType {
  const isTablet = useIsTablet(mobMax, tabMax);
  const isMobile = useIsMobile(mobMax);

  return isTablet ? 'TAB' : isMobile ? 'MOB' : 'DESK';
}
