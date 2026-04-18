import { useState } from 'react';

const useToggleSet = () => {
  const [items, setItems] = useState(new Set<number>());

  const toggle = (index: number) => {
    const next = new Set(items);
    next.has(index) ? next.delete(index) : next.add(index);

    setItems(next);
  };

  const reset = () => setItems(new Set());

  return { items, toggle, reset };
};

export default useToggleSet;
