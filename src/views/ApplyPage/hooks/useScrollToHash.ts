import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToHash = (behavior: ScrollBehavior = 'smooth') => {
  const location = useLocation();
  const hashRef = useRef('');

  useEffect(() => {
    hashRef.current = location.hash.slice(1);
    const offset = document.getElementById(hashRef.current)?.offsetTop;
    window.scrollTo({
      top: offset && offset - 260,
      behavior,
    });
  }, [location]);
};

export default useScrollToHash;
