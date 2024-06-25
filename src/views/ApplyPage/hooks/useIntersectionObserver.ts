import { useEffect, useRef } from 'react';

const useIntersectionObserver = (setActiveHash: React.Dispatch<React.SetStateAction<string>>) => {
  const ref = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 },
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
  }, [setActiveHash]);

  return { ref };
};

export default useIntersectionObserver;
