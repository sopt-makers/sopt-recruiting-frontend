import { useEffect, useRef, useState } from 'react';

const useScrollPosition = (topYScrollPosition: number = 20) => {
  const lastScrollPositionRef = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [isScrollTop, setIsScrollTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScrollPosition = window.scrollY;

      setIsScrollTop(currentScrollPosition < topYScrollPosition);
      setIsScrollingDown(lastScrollPositionRef.current < currentScrollPosition);

      lastScrollPositionRef.current = currentScrollPosition;
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [topYScrollPosition]);

  return {
    isScrollingDown,
    isScrollTop,
  };
};

export default useScrollPosition;
