import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

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

export function useIsMobile(maxWidth = '430.999px') {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width:${maxWidth})`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

export function useDevice(tabPoint?: string, mobPoint?: string): 'TAB' | 'MOB' | 'DESK' {
  const isTablet = useIsTablet(tabPoint);
  const isMobile = useIsMobile(mobPoint);

  return isTablet ? 'TAB' : isMobile ? 'MOB' : 'DESK';
}
