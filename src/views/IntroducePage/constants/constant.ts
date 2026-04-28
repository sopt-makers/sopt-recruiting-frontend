import { ContactItem, ContactType, PartDataType, FAQItemType, FAQTabType } from 'views/IntroducePage/types';

export const TITLE = {
  RECRUITMENT_TARGET: {
    label: 'Recruitment Target',
    title: '아래 3가지에 해당 되는 분이라면 누구든 지원 가능해요',
  },
  POSITION: {
    label: 'Position',
    title: '총 6개의 파트를 모집해요',
  },
  CORE_VALUE: {
    label: 'Core Value',
  },
  SCHEDULE: {
    label: 'Schedule',
    title: '전체 지원 일정을 확인하세요',
  },
  INQUIRY: {
    label: 'Inquiry',
    title: '문의하기',
  },
  FAQ: {
    label: 'FAQ',
    title: '자주 묻는 질문',
  },
};

export const RECRUITMENT_TARGET = [
  {
    id: 1,
    icon: '📱',
    description: 'IT 창업 및 웹/앱\n서비스에 관심이 많고',
  },
  {
    id: 2,
    icon: '🚖',
    description: '수도권 내에서\n활동이 가능한',
  },
  {
    id: 3,
    icon: '🔥',
    description: '열정적인\n대학생',
  },
];

export const SOPT_PART = [
  {
    id: 'Plan',
    name: '기획 파트',
    description:
      '데이터 그로스 모델링과 AI Agent 도구를 활용해 제품을 아이디어 단계부터 출시까지 이끌어내는 과정을 배웁니다.',
  },
  {
    id: 'Design',
    name: '디자인 파트',
    description:
      'UX/UI 기초부터 브랜딩, 디자인 시스템, 사용자 테스트(UT)까지 프로덕트 디자인의 전 과정을 학습하며 타 파트와의 협업 속에서 실무에 가까운 디자인 역량을 쌓아갑니다.',
  },
  {
    id: 'Android',
    name: '안드로이드 파트',
    description:
      'Kotlin과 Jetpack Compose를 활용한 전반적인 안드로이드 앱 개발을 학습합니다. 또한 타 파트와 협업하며 개발 외적인 능력을 성장시키며 육각형 안드로이드 앱 개발자가 되는것을 지향합니다.',
  },
  {
    id: 'iOS',
    name: 'iOS 파트',
    description:
      'UIKit과 SwiftUI 프레임워크를 활용한 iOS 개발과 유연한 설계에 대해 학습합니다. 또한 타 파트와의 건강한 협업 방식을 배우며 클라이언트 개발자로서의 책임을 배웁니다.',
  },
  {
    id: 'Web',
    name: '웹 파트',
    description:
      'React를 중심으로 컴포넌트 설계, API 통신 등 웹 프론트엔드 기술을 체계적으로 학습하고, 타 파트와 협업하여 직접 웹 서비스를 구현하며 개발 역량을 쌓아갑니다.',
  },
  {
    id: 'Server',
    name: '서버 파트',
    description:
      'Java와 Spring을 기반으로 서버 개발의 기초부터 배포, 보안, 테스트 코드, 모니터링 등 실제 서비스 운영 전반을 학습합니다. 이를 통해 타 파트와의 원활한 협업이 가능한 서버 개발자로 성장하는 것을 목표로 합니다.',
  },
];

export const FAQ_TABS: FAQTabType[] = [
  { value: 'ALL', label: '전체' },
  { value: 'Plan', label: '기획' },
  { value: 'Design', label: '디자인' },
  { value: 'Android', label: '안드로이드' },
  { value: 'iOS', label: 'iOS' },
  { value: 'Web', label: '웹' },
  { value: 'Server', label: '서버' },
];

export const FAQ_DATA: Record<PartDataType, FAQItemType[]> = {
  ALL: [
    {
      question: '직장인/휴학생/졸업유예생도 활동할 수 있나요?',
      answer:
        '재직, 휴학, 졸업유예 여부에 관계없이 대학생이면 지원 가능해요.\n다만, 대부분의 SOPT 회원들이 활동에 많은 시간을 투자하고 있으므로 직장 재직자는 활동에 충분히 참여할\n 여유가 있을 경우에 지원하시는 것을 권장해요.',
    },
    {
      question: '파트별 커리큘럼이 어떻게 되나요?',
      answer: `상단의 '리크루팅' 메뉴 또는 'SOPT 인스타그램'에 파트별로 자세하게 안내되어 있으니 참고해 주세요.`,
    },
    {
      question: '경험과 실력이 부족한데 지원해도 괜찮을까요?',
      answer:
        'SOPT는 기획, 디자인, 개발 각 분야에 열정이 있는 사람들이 모여 화합을 통해 변화하고 성장하는 가치를\n추구해요. 따라서 경험과 실력보다는 각 파트에 대한 열정과 SOPT 활동을 통해 이루고자 하는 명확한 목표를 더\n중요시해요. 열정을 갖춘 분들의 용기 있는 도전을 기다릴게요! Shout Our Passion Together!',
    },
  ],
  Plan: [
    {
      question: '기획 파트에서는 무엇을 배우나요?',
      answer:
        '데이터 그로스 모델링과 AI Agent 도구를 활용해 제품을 아이디어 단계부터 출시까지 이끌어내는 과정을 배웁니다.',
    },
    {
      question: '기획 파트 지원에 사전 지식이 필요한가요?',
      answer: '기획에 대한 열정과 관심만 있다면 충분합니다. 별도의 사전 지식은 필요하지 않습니다.',
    },
  ],
  Design: [
    {
      question: '디자인 파트에서는 무엇을 배우나요?',
      answer: 'UX/UI 기초부터 브랜딩, 디자인 시스템, 사용자 테스트(UT)까지 프로덕트 디자인의 전 과정을 학습합니다.',
    },
    {
      question: '디자인 툴을 다룰 줄 알아야 하나요?',
      answer:
        'Figma 기초 사용법 정도는 알고 있으면 좋지만, 입문자도 지원 가능합니다. 활동하면서 함께 성장할 수 있습니다.',
    },
  ],
  Android: [
    {
      question: '안드로이드 파트에서는 무엇을 배우나요?',
      answer: 'Kotlin과 Jetpack Compose를 활용한 전반적인 안드로이드 앱 개발을 학습합니다.',
    },
    {
      question: '안드로이드 개발 경험이 없어도 지원 가능한가요?',
      answer:
        '기초적인 프로그래밍 지식이 있다면 지원 가능합니다. Kotlin이나 Android 경험이 없어도 열정이 있다면 환영합니다.',
    },
  ],
  iOS: [
    {
      question: 'iOS 파트에서는 무엇을 배우나요?',
      answer: 'UIKit과 SwiftUI 프레임워크를 활용한 iOS 개발과 유연한 설계에 대해 학습합니다.',
    },
    {
      question: 'Mac이 없어도 iOS 파트에 지원할 수 있나요?',
      answer: 'iOS 개발을 위해서는 Mac 환경이 필요합니다. Mac 기기 보유 여부를 미리 확인해 주세요.',
    },
  ],
  Web: [
    {
      question: '웹 파트에서는 무엇을 배우나요?',
      answer:
        'React를 중심으로 컴포넌트 설계, API 통신 등 웹 프론트엔드 기술을 체계적으로 학습하고, 직접 웹 서비스를 구현합니다.',
    },
    {
      question: '웹 파트 지원에 필요한 사전 지식이 있나요?',
      answer: 'HTML, CSS, JavaScript 기초 지식이 있으면 좋습니다. React 경험이 없어도 지원 가능합니다.',
    },
  ],
  Server: [
    {
      question: '서버 파트에서는 무엇을 배우나요?',
      answer:
        'Java와 Spring을 기반으로 서버 개발의 기초부터 배포, 보안, 테스트 코드, 모니터링 등 실제 서비스 운영 전반을 학습합니다.',
    },
    {
      question: '서버 파트 지원에 필요한 사전 지식이 있나요?',
      answer: 'Java 또는 다른 언어의 기초 프로그래밍 지식이 있으면 좋습니다. Spring 경험이 없어도 지원 가능합니다.',
    },
  ],
};

export const CORE_VALUE = [
  {
    id: 1,
    value: '의지',
    image: '/core1.png',
    description: '포기하지 않고 끝까지 나아가는 사람',
  },
  {
    id: 2,
    value: '실행',
    image: '/core2.png',
    description: '의지를 생각에서 멈추지 않고 행동으로 옮기는 사람',
  },
  {
    id: 3,
    value: '조화',
    image: '/core3.png',
    description: '함께일 때 더 성장할 수 있는 사람',
  },
];

export const contactMap: Record<ContactType, ContactItem> = {
  [ContactType.EMAIL]: {
    label: '이메일',
    desc: 'president@sopt.org',
    thumbnail: { src: '/email.png' },
    link: { target: '_self', href: 'mailto:president@sopt.org' },
  },
  [ContactType.KAKAO]: {
    label: '카카오톡 플러스 친구',
    desc: 'SOPT',
    thumbnail: { src: '/kakao.png' },
    link: { target: '_blank', href: 'http://pf.kakao.com/_JdTKd' },
  },
  [ContactType.INSTAGRAM]: {
    label: '인스타그램',
    desc: '@sopt_official',
    thumbnail: { src: '/instagram.png' },
    link: { target: '_blank', href: 'https://www.instagram.com/sopt_official/' },
  },
  [ContactType.FACEBOOK]: {
    label: '페이스북',
    desc: 'clubsopt',
    thumbnail: { src: '/facebook.png' },
    link: { target: '_blank', href: 'https://www.facebook.com/clubsopt/' },
  },
};

export const DUMMY_SCHEDULE = {
  group: 'YB',
  applicationStartTime: { date: '3월 3일', hour: '8시' },
  applicationEndTime: { date: '3월 16일', hour: '오후 11시 59분' },
  applicationResultTime: { date: '3월 20일', hour: '오전 6시' },
  interviewStartTime: { date: '3월 16일' },
  interviewEndTime: { date: '3월 17일' },
  finalResultTime: { date: '3월 20일' },
  orientationTime: { date: '3월 23일' },
};
