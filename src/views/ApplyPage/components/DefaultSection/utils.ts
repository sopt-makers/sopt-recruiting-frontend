export const getPastSeasons = (mostRecentSeason: number) =>
  Array.from({ length: 10 }, (_, i) => String(mostRecentSeason - i - 1));
