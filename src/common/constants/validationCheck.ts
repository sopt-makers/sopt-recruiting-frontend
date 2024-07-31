import { validateBirthdate } from '@components/Input/components/InputLine/utils/validateBirthdate';
import { validatePasswordConfirmation } from '@components/Input/components/InputLine/utils/validatePasswordConfirm';

export const VALIDATION_CHECK = {
  name: {
    pattern: /^[가-힣]+$/,
    maxLength: 10,
    minLength: 2,
    errorText: '잘못된 이름(한글명) 형식이에요. 이름(한글명)을 정확하게 입력해주세요.',
    errorTextNonexistence: '존재하지 않은 계정이에요.',
  },
  email: {
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    maxLength: 100,
    errorText: '잘못된 이메일 형식이에요. 이메일을 정확하게 입력해주세요.',
    errorTextExistence: '이미 존재하는 계정이에요.',
    errorTextNonexistence: '존재하지 않은 계정이에요.',
    notMatchErrorText: '잘못된 이메일 혹은 비밀번호예요.',
  },
  verificationCode: {
    maxLength: 6,
    errorText: '인증 번호가 일치하지 않아요.',
  },
  password: {
    pattern: /^[a-zA-Z0-9!@#$%^&*()_+[\]{};':="\\|,.<>/?`~-]{4,}$/,
    maxLength: 100,
    errorText: '비밀번호는 4자리 이상으로 구성 해주세요.',
    notMatchErrorText: '잘못된 이메일 혹은 비밀번호예요.',
  },
  passwordConfirm: {
    maxLength: 100,
    errorText: '비밀번호가 일치하지 않아요.',
    validate: validatePasswordConfirmation,
  },
  birthdate: {
    pattern: /[0-9]{4}\/[0-9]{2}\/[0-9]{2}/,
    min: '1990-01-01',
    max: new Date().toISOString().split('T')[0],
    maxLength: 10,
    errorText: '잘못된 생년월일 형식이에요. 생년월일을 정확하게 입력해주세요.',
    errorTextOutOfRange: '1990년 이후부터 오늘 이전 날짜까지 입력 가능해요.',
    validate: validateBirthdate,
  },
  phoneNumber: {
    pattern: /^010-?\d{3,4}-?\d{4}$/,
    maxLength: 13,
    errorText: '잘못된 휴대폰 번호 형식이에요. 휴대폰 번호를 정확하게 입력해주세요.',
  },
  IDPhoto: {
    errorText: '파일 크기가 너무 커요. 10MB 이하로 선택해주세요.',
  },
  subway: {
    pattern: /^[가-힣\s.,·()-\d']+$/,
    maxLength: 20,
    errorText: '잘못된 입력 형식이에요.',
  },
  textInput: {
    pattern: /^[가-힣\s.,·()\-a-zA-Z\d&]+$/,
    maxLength: 40,
    errorText: '잘못된 입력 형식이에요.',
  },
};
