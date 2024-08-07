import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export function useIsTablet(minWidth = '429px', maxWidth = '768px') {
  const [isTablet, setIsTablet] = useState(false);
  const tablet = useMediaQuery({
    query: `(min-width: ${minWidth}) and (max-width: ${maxWidth})`,
  });
  useEffect(() => {
    setIsTablet(tablet);
  }, [tablet]);
  return isTablet;
}

export function useIsMobile(maxWidth = '428.999px') {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: `(max-width:${maxWidth})`,
  });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}

export function useDevice(): 'TAB' | 'MOB' | 'DESK' {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return isTablet ? 'TAB' : isMobile ? 'MOB' : 'DESK';
}
