import '@testing-library/jest-dom/vitest';

import { setupServer } from 'msw/node';

import { handlers } from '../mocks/handlers';
import { resetScenario } from '../mocks/handlers/scenario';

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

// 4번에서 만든 시나리오 기반 MSW 핸들러. onUnhandledRequest는 실제 worker.start()(main.tsx)와
// 동일하게 'bypass' — screening/final result 등 시나리오 밖 엔드포인트를 건드리는 테스트가
// 있어도 하드 에러로 죽지 않게 함.
export const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
afterEach(() => {
  server.resetHandlers();
  resetScenario();
});
afterAll(() => server.close());
