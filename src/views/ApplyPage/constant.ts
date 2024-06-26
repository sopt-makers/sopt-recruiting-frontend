export const APPLY_INFO = [
  '지원서 작성 전에 SOPT 커리큘럼을 꼭 숙지하고 지원해 주시기 바랍니다.',
  '0월 00일 0요일 OT(오프라인 에정)에 불참 시 지원이 불가하오니 자세히 확인 바랍니다.',
  '한 번 제출된 지원서는 수정이 불가하니 신중히 작성하신 후 제출 부탁드립니다.',
  '최종 제출하지 않은 임시저장 지원서는 미제출로 간주하오니 반드시 최종 제출하시길 바랍니다.',
  `지원 마감 시간이 입박하면 지원자가 몰려 서버가 불안정할 수 있으므로 가급적 여유롭게 제출하는 것을\n  권장드립니다.`,
];

export const APPLY_DATE = [
  {
    label: '지원 기간',
    date: '00.00(월) 오전 00:00 - 00.00(금) 오후 00:00',
  },
  {
    label: '서류 발표',
    date: '00.00(월)',
  },
  {
    label: '면접 평가',
    date: '00.00(월) - 00.00(금) (오프라인 면접)',
  },
  {
    label: '최종 발표',
    date: '00.00(월)',
  },
];

export const SELECT_OPTIONS = {
  성별: ['남자', '여자'],
  학년: ['1학년', '2학년', '3학년', '4학년', '수료 ‧ 유예'],
  이전기수: ['해당사항 없음', '34', '33', '32', '31', '30', '29', '28', '27', '26', '25'],
  지원파트: ['기획', '디자인', '안드로이드', 'iOS', '웹', '서버'],
  경로: [
    'SOPT 페이스북 페이지',
    'SOPT 인스타그램',
    'SOPT 유튜브',
    '포스터',
    'SOPT 수료자 블로그',
    '지인 추천',
    '온라인 홍보글(온라인 커뮤니티 등)',
    '오프라인 홍보글(대학내일 등)',
    '디스콰이엇',
    '기타',
  ],
};
