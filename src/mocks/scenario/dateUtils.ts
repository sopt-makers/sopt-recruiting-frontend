export const daysFromNow = (offset: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return date;
};
