const toDate = (date: Date | string): Date => {
  const newDate = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(newDate.getTime())) {
    // TODO : 배포 시 주석 해제
    // throw new Error('변환할 수 없는 날짜입니다.');
  }
  return newDate;
};

export const isBefore = (date: Date | string, dateToCompare: Date | string): boolean => {
  return toDate(date).getTime() < toDate(dateToCompare).getTime();
};

export const isAfter = (date: Date | string, dateToCompare: Date | string): boolean => {
  return toDate(date).getTime() > toDate(dateToCompare).getTime();
};

export const differenceInSeconds = (laterDate: Date | string, earlierDate: Date | string): number => {
  return Math.floor((toDate(laterDate).getTime() - toDate(earlierDate).getTime()) / 1000);
};

export const subMinutes = (date: Date | string, amount: number): Date => {
  const newDate = new Date();
  newDate.setTime(toDate(date).getTime() - amount * 60 * 1000);
  return newDate;
};

export const _subMinutes = (date: Date | string, amount: number): Date => {
  date = toDate(date);
  date.setTime(date.getTime() - amount * 60 * 1000);
  return date;
};

export const format = (date: Date | string, formatStr: string): string => {
  date = toDate(date);
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const formatter: { [key: string]: string } = {
    M: (date.getMonth() + 1).toString(),
    dd: date.getDate().toString().padStart(2, '0'),
    E: days[date.getDay()] || '',
    EEEE: days[date.getDay()] + '요일',
    aaa: date.getHours() < 12 ? '오전' : '오후',
    HH: date.getHours().toString().padStart(2, '0'),
    hh: (date.getHours() % 12 || 12).toString().padStart(2, '0'),
    mm: date.getMinutes().toString().padStart(2, '0'),
  };

  return formatStr.replace(/M|dd|E|EEE|aaa|HH|hh|mm/g, (substr) => formatter[substr] || '');
};
