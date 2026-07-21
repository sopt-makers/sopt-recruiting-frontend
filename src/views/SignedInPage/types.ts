export interface MyRequest {
  email: string;
  season: number;
  group: string;
  password: string;
}

export interface MyResponse {
  err: boolean;
  season: number;
  name: string;
  part: string;
  submit: boolean;
  hasDraft: boolean;
  // MyPage 실제 사용처(`applicationPass == null` 분기, index.tsx) 기준 nullable.
  // 기존 boolean 선언은 타입 드리프트였음 — 실제 API 응답과 다르면 백엔드 확인 필요.
  applicationPass: boolean | null;
  finalPass: boolean;
}
