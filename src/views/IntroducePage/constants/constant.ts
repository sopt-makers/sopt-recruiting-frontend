import { ContactItem, ContactType, PartDataType } from 'views/IntroducePage/types';

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

