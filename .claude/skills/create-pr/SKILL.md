---
name: create-pr
description: 현재 브랜치를 푸시하고 gh CLI로 diff를 분석해 한국어 PR 설명을 자동 생성/업데이트하는 스킬. "PR 만들어줘", "PR 설명 작성", "PR description 써줘", "PR 올려야 하는데", "create-pr" 등의 요청에 반드시 이 스킬을 사용한다.
---

# create-pr 스킬

gh CLI로 diff를 분석해 변경 사항 요약, 변경 이유/배경, 스크린샷/데모 섹션을 포함한 한국어 PR 설명을 자동 생성한다.

---

## Step 1: 전제 조건 확인

### 1.1 gh CLI 설치 확인

```bash
gh --version
```

- 설치 안 되어 있으면 중단:
  "GitHub CLI(gh)가 설치되어 있지 않습니다.
  아래 명령어로 설치해주세요:

  Mac: brew install gh
  Windows: winget install GitHub.cli

  설치 직후에는 PATH가 반영되도록 터미널을 닫았다가 다시 열거나, 새 터미널 세션에서 진행해주세요.
  이후 `gh auth login` 으로 GitHub 로그인을 해주세요."

### 1.2 gh CLI 인증 확인

```bash
gh auth status
```

- 인증 안 되어 있으면 중단: "`gh auth login`으로 먼저 인증해주세요."

### 1.3 git 레포지토리 확인

```bash
git rev-parse --git-dir
```

---

## Step 2: 브랜치 정보 파악

### 2.1 현재 브랜치 확인

```bash
git rev-parse --abbrev-ref HEAD
```

- `CURRENT_BRANCH` 변수에 저장

### 2.2 브랜치 타입 및 베이스 브랜치 결정

브랜치 네이밍 규칙: `{type}/{description}` (예: `feat/login-page`, `fix/token-expiry`)

**브랜치 타입 추출:**

- `CURRENT_BRANCH`에서 `/` 앞 세그먼트 추출 → `PR_TYPE` 저장
- 예: `feat/login-page` → `feat`, `fix/token-expiry` → `fix`
- 추출 불가 시 Step 6의 **커밋 메시지 추론 규칙** 적용

**베이스 브랜치 결정:**

```bash
git branch -r | grep -E "origin/(develop|main|master)"
```

- 피처 브랜치(`feat/*`, `fix/*`, `chore/*`, `refactor/*`, `docs/*` 등)인 경우:
  - `develop` 존재하면 → `develop`
  - 없으면 → `main`
- `develop` 브랜치인 경우: → `main`
- `BASE_BRANCH` 변수에 저장

---

## Step 3: 브랜치 푸시

### 3.1 원격 브랜치 존재 여부 확인

```bash
git ls-remote --heads origin ${CURRENT_BRANCH}
```

### 3.2 푸시

- 원격에 없으면: `git push -u origin ${CURRENT_BRANCH}`
- 원격에 있으면: 로컬이 앞서있을 때만 `git push origin ${CURRENT_BRANCH}`
- 푸시 실패 시 중단 후 에러 메시지 표시

---

## Step 4: 변경 사항 분석

### 4.1 커밋 목록

```bash
git log ${BASE_BRANCH}..HEAD --oneline
```

### 4.2 변경된 파일 목록

```bash
gh pr diff --name-only 2>/dev/null || git diff ${BASE_BRANCH}...HEAD --name-status
```

- PR이 이미 있으면 `gh pr diff` 우선 사용
- 없으면 `git diff` fallback

### 4.3 전체 diff

```bash
gh pr diff 2>/dev/null || git diff ${BASE_BRANCH}...HEAD
```

### 4.4 대용량 diff

**기본은 4.3 전체 diff**로 분석한다.

**대용량으로 판단될 때만** 전체 raw diff를 끝까지 읽지 않고, 아래를 조합한다.

- `git diff ${BASE_BRANCH}...HEAD --stat` (PR이 열려 있으면 `gh pr diff --stat` 지원 시 동일 목적)
- 4.1 커밋 목록, 4.2 파일 목록
- 필요 시 **핵심 경로만** 부분 diff: `git diff ${BASE_BRANCH}...HEAD -- path…`
- PR 본문에 변경 범위가 크다는 점과, 요약이 파일·커밋 단위에 기댄 것임을 짧게 밝힌다.

**대용량 판단:** `BASE_BRANCH`와 `HEAD` 사이에서 **변경된 파일이 30개 이상**이면 대용량으로 본다. 개수는 4.2 목록을 세거나 `git diff ${BASE_BRANCH}...HEAD --name-only | wc -l`로 확인한다.

---

## Step 5: 기존 PR 확인

```bash
gh pr list --head ${CURRENT_BRANCH} --json number,url,state
```

- PR 있으면 `EXISTING_PR_NUMBER` 저장 → Step 7로
- PR 없으면 `EXISTING_PR_NUMBER = null` → Step 6으로

---

## Step 6: PR 제목 생성

**형식:** `[{PR_TYPE}] {한 줄 요약}`

- `PR_TYPE`은 Step 2.2에서 브랜치명으로부터 이미 추출한 값 사용 (첫 글자 대문자로 변환)
- 브랜치명에서 추출 불가 시 아래 **커밋 메시지 추론 규칙**으로 결정
- 요약은 커밋 메시지와 diff를 바탕으로 한국어로 작성
- 예시: `[Feat] 로그인 페이지 리디자인`, `[Fix] 토큰 만료 시 자동 로그아웃 처리`

**커밋 메시지 추론 규칙** (`git log ${BASE_BRANCH}..HEAD` 범위)

1. 각 커밋 메시지 첫 줄에서 conventional 타입을 파싱한다.
2. `feat`, `fix`, `refactor`, `chore`, `docs` **다섯 가지 중** 커밋 범위에 **한 번이라도 등장한 것만** 남긴다. (등장 횟수·최빈값은 보지 않는다.)
3. 남은 타입들 중 **아래 순서에서 가장 앞에 오는 하나**를 `PR_TYPE`으로 고른다:  
   `feat` > `fix` > `refactor` > `chore` > `docs`
4. 다섯 가지 중 어느 것도 등장하지 않으면 `chore`를 기본값으로 쓴다.

---

## Step 7: PR 본문 생성

아래 템플릿을 항상 사용한다. 섹션 순서와 이모지 헤딩은 고정.

```markdown
## 📋 작업 내용

{커밋과 diff를 바탕으로 완료된 작업을 체크박스로 나열}

- [x] 기능 구현
- [x] 페이지 구조화 및 스타일링

## 📌 PR Point

- {왜 이렇게 구현했는지, 주요 설계 결정}
- {발견된 위험이나 우려 사항, 없으면 "특이사항 없음"}
- {리뷰어가 집중해야 할 부분}
- {개발하면서 궁금했던 점이나 논의하고 싶은 부분}

## 📸 스크린샷

| As-is | To-be |
| ----- | ----- |
|       |       |

---

🤖 made by [claude](https://claude.ai)
```

**작성 가이드:**

- 작업 내용: 파일/함수 단위가 아니라 기능/의도 단위로, 완료된 항목은 `[x]`
- PR Point: diff에서 추론하기 어려운 항목은 `[작성 필요]` 플레이스홀더 남기기
- 모노레포(`apps/`, `packages/`)에 걸친 변경이면 영향 범위를 작업 내용에 명시

**스크린샷 처리:**

- diff에서 UI 변경(컴포넌트, 스타일, 레이아웃) 감지 안 되면 → `## 📸 스크린샷` 섹션 자체를 본문에서 제거
- UI 변경 감지되면 → 테이블 빈 채로 두고 사용자에게 요청:
  "UI 변경이 감지됐어요. 스크린샷을 첨부해주시면 PR에 추가해드릴게요 📸"
  사용자가 이미지 첨부하면 테이블에 삽입 후 `gh pr edit`으로 본문 업데이트

본문을 `/tmp/pr-body.md`에 저장.

---

## Step 8: PR 생성 또는 업데이트

### 8.1 PR이 없는 경우

```bash
gh pr create \
  --base ${BASE_BRANCH} \
  --head ${CURRENT_BRANCH} \
  --title "${PR_TITLE}" \
  --body-file /tmp/pr-body.md
```

### 8.2 PR이 이미 있는 경우

`gh pr edit`에 `--body-file`을 주면 **기존 본문이 전부 교체**된다. 수동으로 적어 둔 설명을 지우지 않도록 **본문 덮어쓰기 전에 사용자에게 확인**한다.

1. (선택) `gh pr view ${EXISTING_PR_NUMBER} --json body`로 기존 본문이 비어 있는지 참고한다. 비어 있으면 확인 생략해도 된다.
2. **사용자에게 질문:** "기존 PR 본문을 이번에 생성한 내용으로 **전부 교체**할까요?"
   - **예(본문 교체):**
     ```bash
     gh pr edit ${EXISTING_PR_NUMBER} \
       --title "${PR_TITLE}" \
       --body-file /tmp/pr-body.md
     ```
   - **아니오(본문 유지):** `gh pr edit`을 호출하지 않는다. PR 제목·본문은 GitHub에 있는 그대로 둔다.

- 성공 시: "✅ PR 생성/업데이트됨: {URL}" 출력
- 실패 시: 에러 메시지 표시 후 수동 생성 안내

---

## 중요 규칙

1. **커밋되지 않은 변경사항은 절대 커밋하거나 스테이징하지 않는다**
2. **diff 분석은 `gh pr diff`를 우선, 없으면 `git diff`로 fallback**
3. **PR 본문은 항상 한국어로 작성**
4. **PR 머지는 절대 하지 않는다**
