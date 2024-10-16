export const _isBefore = (date: Date, dateToCompare: Date): boolean => {
  return date.getTime() < dateToCompare.getTime();
};

export const _isAfter = (date: Date, dateToCompare: Date): boolean => {
  return date.getTime() > dateToCompare.getTime();
};

export const _differenceInSeconds = (laterDate: Date, earlierDate: Date): number => {
  return Math.floor((laterDate.getTime() - earlierDate.getTime()) / 1000);
};
