import { FieldValues } from 'react-hook-form';

import { VALIDATION_CHECK } from '@constants/VALIDATION_CHECK';

export const validateBirthdate = (val: FieldValues) => {
  if (!val) return true;

  const year = Number(val.split('/')[0]);
  const month = Number(val.split('/')[1]);
  const day = Number(val.split('/')[2]);

  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day < 1 || day > 31) {
        return `${year}년 ${month}월은 31일까지만 유효해요.`;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day < 1 || day > 30) {
        return `${year}년 ${month}월은 30일까지만 유효해요.`;
      }
      break;
    case 2: {
      const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      const maxDays = isLeapYear ? 29 : 28;
      if (day < 1 || day > maxDays) {
        return `${year}년 ${month}월은 ${maxDays}일까지만 유효해요.`;
      }
      break;
    }
    default:
      return VALIDATION_CHECK.birthdate.errorText;
  }

  const date = new Date(String(val));
  const minDate = new Date('1990-01-01');
  const today = new Date(new Date().toISOString().split('T')[0]);

  if (isNaN(date.getTime()) || date < minDate || date > today) {
    return VALIDATION_CHECK.birthdate.errorTextOutOfRange;
  }

  return true;
};
