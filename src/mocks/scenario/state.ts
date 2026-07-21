import type { Scenario } from './types';

/**
 * 5번(단위테스트)·9번(기획자 패널)이 공유할 진입점.
 * MSW handler뿐 아니라 테스트/패널에서도 이 모듈을 직접 import해 시나리오를 바꿀 수 있도록
 * msw에 의존하지 않는 순수 상태로 분리함.
 */
export const DEFAULT_SCENARIO: Scenario = {
  group: 'YB',
  phase: 'applying',
  user: 'none',
};

let currentScenario: Scenario = DEFAULT_SCENARIO;

export const getScenario = (): Scenario => currentScenario;

export const setScenario = (scenario: Scenario): void => {
  currentScenario = scenario;
};

export const resetScenario = (): void => {
  currentScenario = DEFAULT_SCENARIO;
};
