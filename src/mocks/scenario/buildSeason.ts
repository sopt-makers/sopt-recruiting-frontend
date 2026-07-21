import { daysFromNow } from './dateUtils';

import type { RecruitingPhase, Scenario } from './types';
import type { RecruitingResponse } from '@type/recruitingInfo';

type SeasonOffsets = Record<
  | 'applicationStart'
  | 'applicationEnd'
  | 'applicationResultStart'
  | 'applicationResultEnd'
  | 'interviewStart'
  | 'interviewEnd'
  | 'finalResultStart'
  | 'finalResultEnd',
  number
>;

/**
 * docs/qa-plan.md 3번 "buildSeason 타임스탬프 배치 표" 그대로.
 * gap은 makers 37기 실데이터 기준 대표값 — 정확한 일수가 아니라 phase 경계 전/후 재현이 목적.
 */
const PHASE_OFFSETS: Record<RecruitingPhase, SeasonOffsets> = {
  notStarted: {
    applicationStart: 2,
    applicationEnd: 7,
    applicationResultStart: 12,
    applicationResultEnd: 13,
    interviewStart: 14,
    interviewEnd: 16,
    finalResultStart: 19,
    finalResultEnd: 20,
  },
  applying: {
    applicationStart: -2,
    applicationEnd: 3,
    applicationResultStart: 8,
    applicationResultEnd: 9,
    interviewStart: 10,
    interviewEnd: 12,
    finalResultStart: 15,
    finalResultEnd: 16,
  },
  waitingScreeningResult: {
    applicationStart: -6,
    applicationEnd: -1,
    applicationResultStart: 4,
    applicationResultEnd: 5,
    interviewStart: 6,
    interviewEnd: 8,
    finalResultStart: 11,
    finalResultEnd: 12,
  },
  screeningResult: {
    applicationStart: -10,
    applicationEnd: -5,
    applicationResultStart: 0,
    applicationResultEnd: 1,
    interviewStart: 2,
    interviewEnd: 4,
    finalResultStart: 7,
    finalResultEnd: 8,
  },
  interview: {
    applicationStart: -13,
    applicationEnd: -8,
    applicationResultStart: -3,
    applicationResultEnd: -2,
    interviewStart: -1,
    interviewEnd: 1,
    finalResultStart: 4,
    finalResultEnd: 5,
  },
  afterInterview: {
    applicationStart: -15,
    applicationEnd: -10,
    applicationResultStart: -5,
    applicationResultEnd: -4,
    interviewStart: -3,
    interviewEnd: -1,
    finalResultStart: 2,
    finalResultEnd: 3,
  },
  finalResult: {
    applicationStart: -17,
    applicationEnd: -12,
    applicationResultStart: -7,
    applicationResultEnd: -6,
    interviewStart: -5,
    interviewEnd: -3,
    finalResultStart: 0,
    finalResultEnd: 1,
  },
  ended: {
    applicationStart: -19,
    applicationEnd: -14,
    applicationResultStart: -9,
    applicationResultEnd: -8,
    interviewStart: -7,
    interviewEnd: -5,
    finalResultStart: -2,
    finalResultEnd: -1,
  },
};

export const buildSeason = ({ phase, group }: Pick<Scenario, 'phase' | 'group'>): RecruitingResponse['season'] => {
  const offsets = PHASE_OFFSETS[phase];

  return {
    id: 1,
    season: 1,
    name: 'QA Test Season',
    group,
    applicationStart: daysFromNow(offsets.applicationStart).toISOString(),
    applicationEnd: daysFromNow(offsets.applicationEnd).toISOString(),
    applicationResultStart: daysFromNow(offsets.applicationResultStart).toISOString(),
    applicationResultEnd: daysFromNow(offsets.applicationResultEnd).toISOString(),
    interviewStart: daysFromNow(offsets.interviewStart).toISOString(),
    interviewEnd: daysFromNow(offsets.interviewEnd).toISOString(),
    finalResultStart: daysFromNow(offsets.finalResultStart).toISOString(),
    finalResultEnd: daysFromNow(offsets.finalResultEnd).toISOString(),
  };
};
