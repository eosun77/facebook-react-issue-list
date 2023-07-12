import { useState, useRef, useCallback } from 'react';

export const useInfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const observer = useRef();

  const target = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return { page, target };
};
