export type TFormValues = Record<string, string | boolean>;

export const defaultValues: TFormValues = {
  이름: '김솝트', // 서버 데이터
  성별: '성별을 선택해주세요',
  생년월일: '',
  연락처: '010-1234-5678', // 서버 데이터
  이메일: 'qwer@naver.com', // 서버 데이터
  거주지: '',
  지하철역: '',
  학교: '',
  재학여부: true,
  학과: '',
  학년: '학년을 선택해주세요',
  ['이전 기수 활동 여부 (제명 포함)']: '이전 기수 활동 여부를 선택해주세요',
};
