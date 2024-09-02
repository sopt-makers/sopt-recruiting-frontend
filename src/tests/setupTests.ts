import '@testing-library/jest-dom/vitest';

/* @ts-ignore */
HTMLCanvasElement.prototype.getContext = () => {
  return {
    fillStyle: '',
    fillRect: vitest.fn(),
  };
};

beforeAll(() => {
  const portalEl = document.createElement('div');
  portalEl.id = 'modal';
  document.body.appendChild(portalEl);
});

// beforeEach(() => {});
// afterAll(() => {});
