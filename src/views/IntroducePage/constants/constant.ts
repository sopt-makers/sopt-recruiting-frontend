import { ContactItem, ContactType, PartDataType, RecruitQuestionItem } from 'views/IntroducePage/types';

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

export const FAQ_TABS: PartDataType[] = ['전체', '기획', '디자인', '안드로이드', 'iOS', '웹', '서버'];

export const FAQ_전체: RecruitQuestionItem[] = [
  {
    question: '직장인/휴학생/졸업유예생도 활동할 수 있나요?',
    answer:
      '재직, 휴학, 졸업유예 여부에 관계없이 대학생이면 지원 가능해요.\n다만, 대부분의 SOPT 회원들이 활동에 많은 시간을 투자하고 있으므로 직장 재직자는 활동에 충분히 참여할\n 여유가 있을 경우에 지원하시는 것을 권장해요.',
  },
  {
    question: '파트별 커리큘럼이 어떻게 되나요?',
    answer: '상단의 ‘리크루팅’ 메뉴 또는 ‘SOPT 인스타그램’에 파트별로 자세하게 안내되어 있으니 참고해 주세요.',
  },
  {
    question: '경험과 실력이 부족한데 지원해도 괜찮을까요?',
    answer:
      'SOPT는 기획, 디자인, 개발 각 분야에 열정이 있는 사람들이 모여 화합을 통해 변화하고 성장하는 가치를\n추구해요. 따라서 경험과 실력보다는 각 파트에 대한 열정과 SOPT 활동을 통해 이루고자 하는 명확한 목표를 더\n중요시해요. 열정을 갖춘 분들의 용기 있는 도전을 기다릴게요! Shout Our Passion Together!',
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
    link: { target: '_blank', href: 'https://pf.kakao.com/_sxaIWG' },
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
