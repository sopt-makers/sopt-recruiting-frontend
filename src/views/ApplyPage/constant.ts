const isMakers = import.meta.env.MODE === 'makers';

export const APPLY_INFO = {
  sections: [
    {
      id: 0,
      content: [
        {
          text: '지원서 작성 전에 SOPT 커리큘럼을 꼭 숙지하고 지원해 주시기 바랍니다.',
          weight: 'normal',
        },
      ],
    },
    {
      id: 1,
      content: [
        {
          text: `${isMakers ? '2월 23일 일요일 ' : '3월 29일 토요일 '}OT(오프라인 예정)에 불참 시 지원이 불가하오니 자세히 확인 바랍니다.`,
          weight: 'normal',
        },
      ],
    },
    {
      id: 2,
      content: [
        { text: '한 번 제출된 지원서는 수정이 불가하니 신중히 작성하신 후 제출 부탁드립니다.', weight: 'normal' },
      ],
    },
    {
      id: 3,
      content: [
        {
          text: '최종 제출하지 않은 임시저장 지원서는 미제출로 간주하오니 반드시 최종 제출하시길 바랍니다.',
          weight: 'normal',
        },
      ],
    },
    {
      id: 4,
      content: [
        {
          text: `지원 마감 시간이 임박하면 지원자가 몰려 서버가 불안정할 수 있으므로 가급적 여유롭게 제출하는 것을 권장드립니다.`,
          weight: 'normal',
        },
      ],
    },
  ],
};

export const SELECT_OPTIONS = {
  gender: ['남자', '여자'],
  univYear: ['1학년', '2학년', '3학년', '4학년', '수료 ‧ 유예'],
  univYearMakers: ['1학년', '2학년', '3학년', '4학년', '수료 ‧ 유예 ‧ 졸업'],
  leaveAbsence: ['재학', '휴학 ‧ 수료 ‧ 유예'],
  leaveAbsenceMakers: ['재학', '휴학 ‧ 수료 ‧ 유예 ‧ 졸업'],
  knownPath: [
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
