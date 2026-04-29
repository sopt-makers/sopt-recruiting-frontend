import { PartDetailData, PartId } from 'views/PartDetailPage/types';

export const PART_DETAIL_TITLE = {
  INTRODUCTION: {
    label: 'Introduction',
    title: (partName: string) => `${partName} 파트를 소개합니다`,
  },
  GOOD_FOR_YOU: {
    label: 'Qualification',
    title: '이런 분이면 더 좋아요',
  },
  LEARNING: {
    label: 'Curriculum',
    title: (partName: string) => `${partName} 파트는 이런 걸 배워요`,
  },
  SCHEDULE: {
    label: 'Schedule',
    title: '전체 지원 일정을 확인하세요',
  },
  REVIEW: {
    label: 'Review',
    title: '솝트 후기에서 관련 정보를 찾아보세요',
  },
};

export const PART_DETAIL: Record<PartId, PartDetailData> = {
  Plan: {
    id: 'Plan',
    name: '기획',
    partName: '기획',
    introduction:
      '기획 파트는 데이터 그로스 모델링과 AI Agent 도구를 활용해 제품을 아이디어 단계부터 출시까지 이끌어내는 과정을 배웁니다. 사용자 중심의 서비스를 설계하고, 다양한 직군과의 협업을 통해 실제 서비스를 만들어 나가는 경험을 할 수 있습니다.',
    preferences: [
      '아이디어를 실제 서비스로 구체화하고 싶은 분',
      '데이터 기반으로 의사결정하는 것을 즐기는 분',
      '다양한 직군과 소통하며 프로젝트를 이끌고 싶은 분',
      '사용자 중심의 서비스 기획에 열정이 있는 분',
    ],
    partCurriculum: [
      '사용자 리서치 & 인터뷰 방법론',
      '데이터 그로스 모델링',
      'AI Agent 도구 활용법',
      '프로토타이핑 & 와이어프레임',
      '제품 로드맵 수립 및 우선순위 결정',
      '타 파트와의 협업 프로세스',
      '서비스 출시 및 운영 전략',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.02.12',
        title: 'SOPT 36기 기획 파트 활동 후기 - 처음으로 서비스를 기획해보다',
        description:
          '솝트에서의 기획 파트 활동은 정말 값진 경험이었습니다. 사용자 인터뷰부터 프로토타이핑까지 실제 서비스를 만드는 전 과정을 경험했어요.',
        generation: 36,
        partType: '기획',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.06.17',
        title: '[SOPT] 기획 파트 YB 합격 후기 - 기획자로 첫 발걸음',
        description:
          '솝트 기획 파트에 합격하기까지의 과정과 준비했던 것들을 공유해요. 비전공자도 충분히 도전할 수 있어요!',
        generation: 36,
        partType: '기획',
      },
    ],
  },
  Design: {
    id: 'Design',
    name: '디자인',
    partName: '디자인',
    introduction:
      'UX/UI 기초부터 브랜딩, 디자인 시스템, 사용자 테스트(UT)까지 프로덕트 디자인의 전 과정을 학습합니다. 타 파트와의 협업 속에서 실무에 가까운 디자인 역량을 쌓아갑니다.',
    preferences: [
      'UX/UI 디자인에 진심으로 관심이 있는 분',
      '사용자 경험을 개선하는 것에 열정이 있는 분',
      '시각적 커뮤니케이션에 흥미를 느끼는 분',
      '협업을 통한 프로덕트 디자인을 경험하고 싶은 분',
    ],
    partCurriculum: [
      'UX/UI 기초 이론 및 실습',
      '브랜딩 & 아이덴티티 디자인',
      '디자인 시스템 구축',
      '사용자 테스트(UT) 설계 및 분석',
      'Figma 실무 활용',
      '프로토타이핑 & 인터랙션 디자인',
      '타 파트와의 협업 디자인 프로세스',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.03.05',
        title: 'SOPT 36기 디자인 파트 활동 후기 - Figma로 실제 서비스를 만들다',
        description:
          '디자인 시스템을 직접 구축하고 사용자 테스트를 해보는 경험이 정말 인상적이었어요. 개발자와 협업하면서 많이 성장했습니다.',
        generation: 36,
        partType: '디자인',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.07.20',
        title: '[SOPT] 디자인 파트 합격 후기 - 포트폴리오 없이도 합격할 수 있을까?',
        description:
          '솝트 디자인 파트 지원 준비 과정과 면접 후기를 공유합니다. 포트폴리오보다 중요한 것은 열정이에요!',
        generation: 36,
        partType: '디자인',
      },
    ],
  },
  Android: {
    id: 'Android',
    name: '안드로이드',
    partName: '안드로이드',
    introduction:
      'Kotlin과 Jetpack Compose를 활용한 전반적인 안드로이드 앱 개발을 학습합니다. 또한 타 파트와 협업하며 개발 외적인 능력을 성장시키며 육각형 안드로이드 앱 개발자가 되는 것을 지향합니다.',
    preferences: [
      'Android 앱 개발에 진지한 관심이 있는 분',
      'Kotlin 언어를 배우거나 이미 활용해본 분',
      '모바일 UX와 앱 설계에 흥미를 느끼는 분',
      '팀과 함께 실제 앱을 만들어보고 싶은 분',
    ],
    partCurriculum: [
      'Kotlin 언어 기초 및 심화',
      'Jetpack Compose UI 개발',
      'Android 앱 아키텍처 패턴 (MVVM, MVI)',
      'API 통신 및 데이터 처리',
      'Android Jetpack 컴포넌트 활용',
      '앱 성능 최적화',
      '타 파트와의 협업 개발 프로세스',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.02.28',
        title: 'SOPT 36기 안드로이드 파트 활동 후기 - Compose로 앱을 만들어보다',
        description:
          'Jetpack Compose를 활용한 앱 개발부터 실제 배포까지, 솝트에서의 안드로이드 개발 경험을 공유합니다.',
        generation: 36,
        partType: '안드로이드',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.07.15',
        title: '[SOPT] 안드로이드 파트 YB 합격 후기',
        description: '안드로이드 개발 비전공자가 솝트 안드로이드 파트에 합격하기까지의 준비 과정을 솔직하게 공유해요.',
        generation: 36,
        partType: '안드로이드',
      },
    ],
  },
  iOS: {
    id: 'iOS',
    name: 'iOS',
    partName: 'iOS',
    introduction:
      'UIKit과 SwiftUI 프레임워크를 활용한 iOS 개발과 유연한 설계에 대해 학습합니다. 또한 타 파트와의 건강한 협업 방식을 배우며 클라이언트 개발자로서의 책임을 배웁니다.',
    preferences: [
      'iOS 앱 개발에 진지한 관심이 있는 분',
      'Swift 언어를 배우거나 활용해본 분',
      'Apple HIG를 기반으로 좋은 UX를 만들고 싶은 분',
      'Mac 환경에서 개발할 수 있는 분',
    ],
    partCurriculum: [
      'Swift 언어 기초 및 심화',
      'UIKit 기반 UI 개발',
      'SwiftUI 선언형 UI 개발',
      'iOS 앱 아키텍처 패턴 (MVVM, Clean Architecture)',
      'Combine & async/await 비동기 처리',
      'API 통신 및 데이터 바인딩',
      '타 파트와의 협업 개발 프로세스',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.03.10',
        title: 'SOPT 36기 iOS 파트 활동 후기 - SwiftUI로 앱을 만들어보다',
        description:
          'UIKit과 SwiftUI를 모두 배우며 iOS 개발의 깊이를 더해간 솝트에서의 경험을 공유합니다.',
        generation: 36,
        partType: 'iOS',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.08.01',
        title: '[SOPT] iOS 파트 합격 후기 - Mac 없이도 준비할 수 있을까?',
        description: 'iOS 파트 지원을 준비하면서 겪었던 고민들과 실제 면접 질문들을 정리해서 공유해요.',
        generation: 36,
        partType: 'iOS',
      },
    ],
  },
  Web: {
    id: 'Web',
    name: '웹',
    partName: '웹',
    introduction:
      'React를 중심으로 컴포넌트 설계, API 통신 등 웹 프론트엔드 기술을 체계적으로 학습하고, 타 파트와 협업하여 직접 웹 서비스를 구현하며 개발 역량을 쌓아갑니다.',
    preferences: [
      'React 기반 웹 개발에 관심이 있는 분',
      '컴포넌트 설계와 상태 관리를 배우고 싶은 분',
      '사용자 친화적인 웹 서비스를 만들고 싶은 분',
      '타 파트와 협업하여 실제 웹 서비스를 구현하고 싶은 분',
    ],
    partCurriculum: [
      'JavaScript/TypeScript 기초 및 심화',
      'React 컴포넌트 설계',
      '상태 관리 (React Query, Zustand 등)',
      'API 통신 및 데이터 처리',
      '성능 최적화 및 번들링',
      'CSS-in-JS & 스타일링 기법',
      '타 파트와의 협업 개발 프로세스',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.02.20',
        title: 'SOPT 36기 웹 파트 활동 후기 - React로 실제 서비스를 만들다',
        description: 'React와 TypeScript를 기반으로 실제 서비스를 개발한 솝트 웹 파트 활동 경험을 공유합니다.',
        generation: 36,
        partType: '웹',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.07.08',
        title: '[SOPT] 웹 파트 YB 합격 후기 - 프론트엔드 입문자의 도전기',
        description:
          'HTML/CSS만 알던 제가 솝트 웹 파트에 합격하기까지의 준비 과정을 솔직하게 정리했습니다.',
        generation: 36,
        partType: '웹',
      },
    ],
  },
  Server: {
    id: 'Server',
    name: '서버',
    partName: '서버',
    introduction:
      'Java와 Spring을 기반으로 서버 개발의 기초부터 배포, 보안, 테스트 코드, 모니터링 등 실제 서비스 운영 전반을 학습합니다. 이를 통해 타 파트와의 원활한 협업이 가능한 서버 개발자로 성장하는 것을 목표로 합니다.',
    preferences: [
      '새로운 도전을 즐겨하며 이 모든 기대감을 안고 오시는 분',
      '이미 원하는 IT 산업 분야를 탐색하고 탐구하고 싶은 분',
      '탐구적 지식 탐험과 교류를 통해 성장할 준비가 되어있는 분',
      '서버 개발자로서 서비스에 새로운 국면을 이끄는 사람이 되고 싶은 분',
    ],
    partCurriculum: [
      'Server Architecture & API Design',
      'Spring Framework & JPA 심화',
      '데이터베이스 설계 및 최적화',
      '인증/인가 및 보안',
      '테스트 코드 작성',
      'CI/CD 및 배포 자동화',
      '모니터링 및 장애 대응',
      '타 파트와의 협업 개발 프로세스',
    ],
    reviews: [
      {
        id: 1,
        author: '김솝트',
        date: '24.02.12',
        title: 'SOPT 36기 서버 파트 활동 후기 - 서울 첫 번째!',
        description:
          '솝트에서의 서버 파트 활동은 정말 값진 경험이었습니다. 실제 서비스를 만들면서 배우는 과정이 너무 재미있었어요.',
        generation: 36,
        partType: '서버',
      },
      {
        id: 2,
        author: '이솝트',
        date: '24.06.17',
        title: '[SOPT] GO SOPT 36기 서버(Server) YB 최종합격 후기 - 서버 합격/변경',
        description: '솝트 서버 파트에 합격하기까지의 과정과 준비했던 것들을 공유해요.',
        generation: 36,
        partType: '서버',
      },
    ],
  },
};
