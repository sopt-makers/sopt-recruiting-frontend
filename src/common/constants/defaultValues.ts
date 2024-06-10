export type TFormValues = Record<string, string | boolean>;

export const defaultValues: TFormValues = {
  이름: '',
  성별: '성별을 선택해주세요',
  생년월일: '',
  연락처: '',
  이메일: '',
  거주지: '',
  지하철역: '',
  학교: '',
  재학여부: true,
  학과: '',
  학년: '',
  이전기수활동여부: '이전 기수 활동 여부를 선택해주세요',
};
