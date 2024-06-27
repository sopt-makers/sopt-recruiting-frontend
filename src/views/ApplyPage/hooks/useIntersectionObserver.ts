import { useEffect, useRef } from 'react';

const useIntersectionObserver = (handleSetActiveHash: (hash: string) => void) => {
  const ref = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleSetActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2 },
    );

    ref.current.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      ref.current.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, [handleSetActiveHash]);

  return { ref };
};

export default useIntersectionObserver;
