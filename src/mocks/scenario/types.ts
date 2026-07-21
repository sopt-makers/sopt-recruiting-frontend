export type RecruitingGroup = 'YB' | 'OB';

/**
 * useRecruitingSchedule.tsx의 파생 플래그가 만드는 실제 구간.
 * 타임스탬프 순서 applicationStart < applicationEnd <= applicationResultStart <
 * applicationResultEnd <= interviewStart < interviewEnd <= finalResultStart <
 * finalResultEnd 기준으로, NoMore* 불리언 조합이 바뀌는 지점마다 하나씩:
 *
 * - notStarted              : now < applicationStart            → NoMoreRecruit
 * - applying                : applicationStart~applicationEnd   → 지원 가능
 * - waitingScreeningResult   : applicationEnd~applicationResultStart → NoMoreApply, 발표 전
 * - screeningResult          : applicationResultStart~applicationResultEnd → 서류 합불 발표
 * - interview                : applicationResultEnd~interviewEnd → 면접 전, ReviewPage 열람 가능
 * - afterInterview           : interviewEnd~finalResultStart     → 면접 후, NoMoreReview=true, ReviewPage 차단
 * - finalResult              : finalResultStart~finalResultEnd  → 최종 합불 발표
 * - ended                    : now >= finalResultEnd             → NoMoreRecruit
 *
 * interview/afterInterview는 NoMoreReview(interviewEnd 기준, ReviewPage/index.tsx의
 * `if (NoMoreReview) return <NoMore .../>` 가드)가 실제로 화면을 가르는 걸 확인하고
 * 쪼갠 phase. "phase 하나 = 화면 하나" 원칙 유지용.
 *
 * ==== 페이지별 기대값이 다름 (중요) ====
 * 같은 (phase, user) 입력에도 MyPage와 ResultPage가 다르게 반응하는 경우가 있음:
 * finalResult phase에서 applicationPass가 true가 아닐 때(false 또는 null)
 *   - MyPage(renderApplicationStatus): "서류 불합격" 텍스트를 그 자리에 보여줌 (정보성)
 *   - ResultPage: `!NoMoreFinalResult && (applicationPass ? <FinalResult/> : <NoMore content="합불 확인 기간이 아니에요"/>)`
 *     → 전면 차단(NoMore), 문구도 "발표 기간 아님"이라 실제 사유(불합격)와 다르게 보임
 * 즉 Scenario 하나의 "정답 화면"은 페이지마다 다르다. 5번 단위테스트는
 * (Scenario × Page) 2차원 매트릭스여야 하고, 나중에 픽스처를
 * `expectedByPage: { MyPage: ..., ResultPage: ..., ReviewPage: ... }` 형태로
 * 스캐폴딩할 예정 (아직 미구현).
 *
 * 참고: ScreeningResult/FinalResult 컴포넌트 자체는 MyResponse.applicationPass가 아니라
 * 별도 엔드포인트(useGetScreeningResult/useGetFinalResult)의 pass 필드로 합격/불합격
 * 문구를 그림 — ResultPage 레벨의 진입 가드(NoMoreScreeningResult/NoMoreFinalResult,
 * applicationPass)와는 별개의 데이터 소스라 buildMyInfo만으로 이 두 컴포넌트 내부
 * 문구까지는 못 잠금. 3번에서 범위 확인 필요.
 */
export type RecruitingPhase =
  | 'notStarted'
  | 'applying'
  | 'waitingScreeningResult'
  | 'screeningResult'
  | 'interview'
  | 'afterInterview'
  | 'finalResult'
  | 'ended';

/**
 * MyResponse(hasDraft/submit/applicationPass)를 조합한 지원자 상태.
 * 'pending'은 별도 값이 아니라 submitted(applicationPass: null)가 finalResult
 * phase에서 렌더링될 때 생기는 화면이었을 뿐이라 제거함 — phase가 이미 그 구분을 담당.
 */
export type ApplicantState = 'none' | 'draftOnly' | 'submitted' | 'screenPass' | 'screenFail';

export type Scenario = {
  group: RecruitingGroup;
  phase: RecruitingPhase;
  user: ApplicantState;
};
