import { useState } from 'react';

const useToggleSet = () => {
  const [items, setItems] = useState(new Set<number>());

  const toggle = (index: number) => {
    setItems((prev) => {
      const next = new Set(prev);
      next.has(index) ? next.delete(index) : next.add(index);

      return next;
    });
  };

  const reset = () => setItems(new Set());

  return { items, toggle, reset };
};

export default useToggleSet;
