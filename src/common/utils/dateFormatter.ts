export const _isBefore = (date: Date | string, dateToCompare: Date | string): boolean => {
  if (typeof date === 'string') date = new Date(date);
  if (typeof dateToCompare === 'string') dateToCompare = new Date(dateToCompare);
  return date.getTime() < dateToCompare.getTime();
};

export const _isAfter = (date: Date | string, dateToCompare: Date | string): boolean => {
  if (typeof date === 'string') date = new Date(date);
  if (typeof dateToCompare === 'string') dateToCompare = new Date(dateToCompare);
  return date.getTime() > dateToCompare.getTime();
};

export const _differenceInSeconds = (laterDate: Date | string, earlierDate: Date | string): number => {
  if (typeof laterDate === 'string') laterDate = new Date(laterDate);
  if (typeof earlierDate === 'string') earlierDate = new Date(earlierDate);
  return Math.floor((laterDate.getTime() - earlierDate.getTime()) / 1000);
};

export const _subMinutes = (date: Date | string, amount: number): Date => {
  if (typeof date === 'string') date = new Date(date);
  const newDate = new Date();
  newDate.setTime(date.getTime() - amount * 60 * 1000);
  return newDate;
};

export const _format = (date: Date | string, formatStr: string): string => {
  if (typeof date === 'string') date = new Date(date);
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const formatter: { [key: string]: string } = {
    M: (date.getMonth() + 1).toString(),
    dd: date.getDate().toString().padStart(2, '0'),
    E: days[date.getDay() - 1],
    aaa: date.getHours() < 12 ? '오전' : '오후',
    HH: date.getHours().toString().padStart(2, '0'),
    hh: (date.getHours() % 12 || 12).toString().padStart(2, '0'),
    mm: date.getMinutes().toString().padStart(2, '0'),
  };

  return formatStr.replace(/M|dd|E|aaa|HH|hh|mm/g, (substr) => formatter[substr]);
};
