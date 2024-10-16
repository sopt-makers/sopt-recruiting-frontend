export const _isBefore = (date: Date, dateToCompare: Date): boolean => {
  return date.getTime() < dateToCompare.getTime();
};

export const _isAfter = (date: Date, dateToCompare: Date): boolean => {
  return date.getTime() > dateToCompare.getTime();
};

export const _differenceInSeconds = (laterDate: Date, earlierDate: Date): number => {
  return Math.floor((laterDate.getTime() - earlierDate.getTime()) / 1000);
};

export const _subMinutes = (date: Date, amount: number): Date => {
  const newDate = new Date();
  newDate.setTime(date.getTime() - amount * 60 * 1000);
  return newDate;
};
