import { QuestionResponse } from './types';

const q = (
  id: number,
  order: number,
  question: string,
  charLimit: number,
  extra?: Partial<QuestionResponse>,
): QuestionResponse => ({
  id,
  order,
  question,
  charLimit,
  urls: [],
  ...extra,
});

export const DUMMY_COMMON_QUESTIONS = {
  part: 'COMMON',
  questions: [
    q(101, 1, 'SOPT에 지원하게 된 동기를 작성해주세요.', 500, { placeholder: '지원 동기를 자유롭게 작성해주세요.' }),
    q(102, 2, '본인의 강점과 약점을 작성해주세요.', 400),
    q(103, 3, '팀 프로젝트 경험 중 가장 기억에 남는 것과 본인의 역할을 작성해주세요.', 500),
  ],
};

export const DUMMY_PART_QUESTIONS = [
  {
    part: '기획',
    questions: [
      q(201, 1, '기획자로서 본인이 생각하는 좋은 서비스란 무엇인가요?', 600),
      q(202, 2, '최근에 인상 깊게 사용한 서비스와 그 이유를 작성해주세요.', 500),
    ],
  },
  {
    part: '디자인',
    questions: [
      q(301, 1, '본인의 디자인 포트폴리오 링크 또는 파일을 제출해주세요.', 300, { isFile: true }),
      q(302, 2, '디자이너로서 가장 중요하게 생각하는 가치는 무엇인가요?', 500),
    ],
  },
  {
    part: '웹',
    questions: [
      q(401, 1, '본인이 사용해본 프론트엔드 기술 스택과 경험을 작성해주세요.', 500),
      q(402, 2, '협업 경험에서 어려웠던 점과 해결 방법을 작성해주세요.', 500),
    ],
  },
  {
    part: '서버',
    questions: [
      q(501, 1, '백엔드 개발 경험과 주로 사용하는 기술 스택을 작성해주세요.', 500),
      q(502, 2, '본인이 설계한 API 또는 데이터베이스 구조를 예시와 함께 설명해주세요.', 600),
    ],
  },
  {
    part: 'iOS',
    questions: [
      q(601, 1, 'iOS 개발 경험과 사용해본 프레임워크를 작성해주세요.', 500),
      q(602, 2, 'Swift와 Objective-C 중 선호하는 언어와 그 이유를 작성해주세요.', 400),
    ],
  },
  {
    part: 'Android',
    questions: [
      q(701, 1, 'Android 개발 경험과 사용해본 라이브러리를 작성해주세요.', 500),
      q(702, 2, 'Jetpack Compose 또는 XML 방식 중 선호하는 방식과 그 이유를 작성해주세요.', 400),
    ],
  },
];
