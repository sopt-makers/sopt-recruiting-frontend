import { Suspense } from 'react';

import { render, screen, within } from 'tests/test-utils';
import MyPage from 'views/MyPage';

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

const renderMyPage = () =>
  render(
    <Suspense fallback={null}>
      <MyPage />
    </Suspense>,
  );

const getStatusRow = async () => (await screen.findByText('지원상태')).closest('li') as HTMLElement;

type Expectation = { type: 'blocked' } | { type: 'empty' } | { type: 'text'; value: string } | { type: 'button' };

/**
 * docs/qa-plan.md 5번 매트릭스. finalResult 열의 submitted/screenFail은
 * MyPage와 ResultPage(ResultPage.test.tsx)가 다르게 반응하는 지점 — 현재 실제 동작을
 * 그대로 회귀 고정. 버그 여부 판단은 6번에서.
 */
const cases: Array<[RecruitingPhase, ApplicantState, Expectation]> = [
  ['notStarted', 'none', { type: 'blocked' }],
  ['notStarted', 'draftOnly', { type: 'blocked' }],
  ['notStarted', 'submitted', { type: 'blocked' }],
  ['notStarted', 'screenPass', { type: 'blocked' }],
  ['notStarted', 'screenFail', { type: 'blocked' }],

  ['applying', 'none', { type: 'empty' }],
  ['applying', 'draftOnly', { type: 'text', value: '미제출' }],
  ['applying', 'submitted', { type: 'text', value: '제출 완료' }],
  ['applying', 'screenPass', { type: 'text', value: '서류 합격' }],
  ['applying', 'screenFail', { type: 'text', value: '서류 불합격' }],

  ['waitingScreeningResult', 'none', { type: 'empty' }],
  ['waitingScreeningResult', 'draftOnly', { type: 'text', value: '미제출' }],
  ['waitingScreeningResult', 'submitted', { type: 'text', value: '제출 완료' }],
  ['waitingScreeningResult', 'screenPass', { type: 'text', value: '서류 합격' }],
  ['waitingScreeningResult', 'screenFail', { type: 'text', value: '서류 불합격' }],

  ['screeningResult', 'none', { type: 'empty' }],
  ['screeningResult', 'draftOnly', { type: 'text', value: '미제출' }],
  ['screeningResult', 'submitted', { type: 'button' }],
  ['screeningResult', 'screenPass', { type: 'button' }],
  ['screeningResult', 'screenFail', { type: 'button' }],

  ['interview', 'none', { type: 'empty' }],
  ['interview', 'draftOnly', { type: 'text', value: '미제출' }],
  ['interview', 'submitted', { type: 'text', value: '제출 완료' }],
  ['interview', 'screenPass', { type: 'text', value: '서류 합격' }],
  ['interview', 'screenFail', { type: 'text', value: '서류 불합격' }],

  ['afterInterview', 'none', { type: 'empty' }],
  ['afterInterview', 'draftOnly', { type: 'text', value: '미제출' }],
  ['afterInterview', 'submitted', { type: 'text', value: '제출 완료' }],
  ['afterInterview', 'screenPass', { type: 'text', value: '서류 합격' }],
  ['afterInterview', 'screenFail', { type: 'text', value: '서류 불합격' }],

  ['finalResult', 'none', { type: 'empty' }],
  ['finalResult', 'draftOnly', { type: 'text', value: '미제출' }],
  ['finalResult', 'submitted', { type: 'text', value: '서류 불합격' }],
  ['finalResult', 'screenPass', { type: 'button' }],
  ['finalResult', 'screenFail', { type: 'text', value: '서류 불합격' }],

  ['ended', 'none', { type: 'blocked' }],
  ['ended', 'draftOnly', { type: 'blocked' }],
  ['ended', 'submitted', { type: 'blocked' }],
  ['ended', 'screenPass', { type: 'blocked' }],
  ['ended', 'screenFail', { type: 'blocked' }],
];

describe('MyPage — phase x user 지원상태 매트릭스', () => {
  test.each(cases)('%s x %s', async (phase, user, expectation) => {
    setScenario({ group: 'YB', phase, user });
    renderMyPage();

    if (expectation.type === 'blocked') {
      expect(await screen.findByText('모집 기간이 아니에요')).toBeInTheDocument();
      return;
    }

    if (expectation.type === 'empty') {
      expect(await screen.findByText('지원한 내역이 없어요')).toBeInTheDocument();
      return;
    }

    const row = await getStatusRow();

    if (expectation.type === 'text') {
      expect(within(row).getByText(expectation.value)).toBeInTheDocument();
      return;
    }

    expect(within(row).getByText('결과 확인')).toBeInTheDocument();
  });
});
