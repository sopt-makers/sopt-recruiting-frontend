import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const location = useLocation();
  const hashRef = useRef('');

  useEffect(() => {
    hashRef.current = location.hash.slice(1);
    document.getElementById(hashRef.current)?.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  return null;
};

export default ScrollToAnchor;
