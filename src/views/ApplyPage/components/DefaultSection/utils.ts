export const getPastSeasons = (season: number) => Array.from({ length: 10 }, (_, i) => String(season - i - 1));
