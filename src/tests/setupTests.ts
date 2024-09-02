import '@testing-library/jest-dom/vitest';

/* @ts-ignore */
HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillStyle: '',
    fillRect: vitest.fn(),
  };
};
