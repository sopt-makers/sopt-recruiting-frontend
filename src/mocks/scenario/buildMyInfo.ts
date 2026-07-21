import type { ApplicantState, Scenario } from './types';
import type { MyResponse } from 'views/SignedInPage/types';

type ApplicantStateFields = Pick<MyResponse, 'hasDraft' | 'submit' | 'applicationPass'>;

const APPLICANT_STATE_FIELDS: Record<ApplicantState, ApplicantStateFields> = {
  none: { hasDraft: false, submit: false, applicationPass: null },
  draftOnly: { hasDraft: true, submit: false, applicationPass: null },
  submitted: { hasDraft: true, submit: true, applicationPass: null },
  screenPass: { hasDraft: true, submit: true, applicationPass: true },
  screenFail: { hasDraft: true, submit: true, applicationPass: false },
};

// ApplicantState는 서류 단계까지만 모델링(docs/qa-plan.md 결정 E) — finalPass는 범위 밖이라 항상 false.
export const buildMyInfo = ({ user }: Pick<Scenario, 'user'>): MyResponse => ({
  err: false,
  season: 1,
  name: 'QA 테스터',
  part: 'iOS',
  finalPass: false,
  ...APPLICANT_STATE_FIELDS[user],
});
