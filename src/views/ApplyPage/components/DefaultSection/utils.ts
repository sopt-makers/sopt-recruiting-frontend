export const getMostRecentSeasonArray = (season: number, isMakers: boolean) => {
  const array = Array.from({ length: 10 }, (_, i) => String(season - i - 1));

  if (!isMakers) {
    array.unshift('해당사항 없음');
  }

  return array;
};
