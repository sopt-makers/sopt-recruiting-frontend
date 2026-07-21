import { Suspense } from 'react';

import { render, screen } from 'tests/test-utils';
import ResultPage from 'views/ResultPage';

import { setScenario } from '../../mocks/handlers/scenario';

import type { ApplicantState, RecruitingPhase } from '../../mocks/scenario/types';

const ACCESS_TOKEN_KEY = 'soptApplyAccessToken';
const ACCESS_TOKEN_EXPIRED_KEY = 'soptApplyAccessTokenExpiredTime';

// tokenInstance(@apis/tokenInstance.ts)의 request interceptor는 만료시각이 없으면
// "만료된 것"으로 보고 토큰을 지우고 리다이렉트한다 — 반드시 만료시각도 같이 세팅해야 함.
beforeEach(() => {
  localStorage.setItem(ACCESS_TOKEN_KEY, 'test-token');
  localStorage.setItem(ACCESS_TOKEN_EXPIRED_KEY, new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString());
});

afterEach(() => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(ACCESS_TOKEN_EXPIRED_KEY);
});

type Expectation = { type: 'blocked' } | { type: 'screeningResult' } | { type: 'finalResult' };

const BLOCKED_TEXT = '합불 확인 기간이 아니에요';

/**
 * docs/qa-plan.md 5번 매트릭스. ScreeningResult/FinalResult 내부 콘텐츠(pass 문구 등)는
 * 별도 엔드포인트(/recruiting-applicant/result/*) 소관이라 이번 범위 밖 — 여기서는
 * ResultPage가 어떤 컴포넌트를 골라 렌더하는지(NoMore vs ScreeningResult vs FinalResult)만 검증.
 * finalResult 열의 submitted/screenFail은 MyPage(MyPage.test.tsx)와 다르게 반응하는 지점 —
 * 현재 실제 동작을 그대로 회귀 고정. 버그 여부 판단은 6번에서.
 */
const cases: Array<[RecruitingPhase, ApplicantState, Expectation]> = [
  ['notStarted', 'none', { type: 'blocked' }],
  ['notStarted', 'draftOnly', { type: 'blocked' }],
  ['notStarted', 'submitted', { type: 'blocked' }],
  ['notStarted', 'screenPass', { type: 'blocked' }],
  ['notStarted', 'screenFail', { type: 'blocked' }],

  ['applying', 'none', { type: 'blocked' }],
  ['applying', 'draftOnly', { type: 'blocked' }],
  ['applying', 'submitted', { type: 'blocked' }],
  ['applying', 'screenPass', { type: 'blocked' }],
  ['applying', 'screenFail', { type: 'blocked' }],

  ['waitingScreeningResult', 'none', { type: 'blocked' }],
  ['waitingScreeningResult', 'draftOnly', { type: 'blocked' }],
  ['waitingScreeningResult', 'submitted', { type: 'blocked' }],
  ['waitingScreeningResult', 'screenPass', { type: 'blocked' }],
  ['waitingScreeningResult', 'screenFail', { type: 'blocked' }],

  ['screeningResult', 'none', { type: 'blocked' }],
  ['screeningResult', 'draftOnly', { type: 'blocked' }],
  ['screeningResult', 'submitted', { type: 'screeningResult' }],
  ['screeningResult', 'screenPass', { type: 'screeningResult' }],
  ['screeningResult', 'screenFail', { type: 'screeningResult' }],

  ['interview', 'none', { type: 'blocked' }],
  ['interview', 'draftOnly', { type: 'blocked' }],
  ['interview', 'submitted', { type: 'blocked' }],
  ['interview', 'screenPass', { type: 'blocked' }],
  ['interview', 'screenFail', { type: 'blocked' }],

  ['afterInterview', 'none', { type: 'blocked' }],
  ['afterInterview', 'draftOnly', { type: 'blocked' }],
  ['afterInterview', 'submitted', { type: 'blocked' }],
  ['afterInterview', 'screenPass', { type: 'blocked' }],
  ['afterInterview', 'screenFail', { type: 'blocked' }],

  ['finalResult', 'none', { type: 'blocked' }],
  ['finalResult', 'draftOnly', { type: 'blocked' }],
  ['finalResult', 'submitted', { type: 'blocked' }],
  ['finalResult', 'screenPass', { type: 'finalResult' }],
  ['finalResult', 'screenFail', { type: 'blocked' }],

  ['ended', 'none', { type: 'blocked' }],
  ['ended', 'draftOnly', { type: 'blocked' }],
  ['ended', 'submitted', { type: 'blocked' }],
  ['ended', 'screenPass', { type: 'blocked' }],
  ['ended', 'screenFail', { type: 'blocked' }],
];

describe('ResultPage — phase x user 렌더 매트릭스', () => {
  test.each(cases)('%s x %s', async (phase, user, expectation) => {
    setScenario({ group: 'YB', phase, user });
    render(
      <Suspense fallback={null}>
        <ResultPage />
      </Suspense>,
    );

    if (expectation.type === 'blocked') {
      expect(await screen.findByText(BLOCKED_TEXT)).toBeInTheDocument();
      return;
    }

    // ScreeningResult/FinalResult 둘 다 <Title>결과 확인</Title>을 무조건 렌더 —
    // 내부 pass 문구는 별도 엔드포인트 소관이라 여기선 "이 컴포넌트가 선택됐다"만 확인.
    expect(await screen.findByText('결과 확인')).toBeInTheDocument();
  });
});
